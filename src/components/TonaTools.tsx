import { supabase } from "@/core/infra/db";
import { useEffect, useState } from "react";

export function TonaTools() {
  const [message, setMessage] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [yesDate, setYesDate] = useState<string | null>(null);

  useEffect(() => {
    // Initial fetch
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    const { data, error } = await supabase
      .from("proposal")
      .select("message, show_question, yes_date")
      .eq("id", 1)
      .single();

    if (error) {
      setError(error.message);
    } else {
      setMessage(data.message);
      setShowQuestion(data.show_question);
      setYesDate(data.yes_date);
    }
  };

  const syncMessage = async (message: string) => {
    setMessage(message);
    const { error } = await supabase
      .from("proposal")
      .update({ message })
      .eq("id", 1);

    if (error) setError(error.message);
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="text-xl mb-4">Admin Panel</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="mb-4">
        <textarea
          value={message}
          onChange={(e) => syncMessage(e.target.value)}
          className="border p-2 mr-2"
        />
      </div>
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={showQuestion}
            onChange={async (e) => {
              setShowQuestion(e.target.checked);
              await supabase
                .from("proposal")
                .update({ show_question: e.target.checked })
                .eq("id", 1);
            }}
          />
          Show Question
        </label>
      </div>
      <div className="mb-4">Dijo que sí el {yesDate}</div>
      <button
        onClick={async () => {
          await supabase
            .from("proposal")
            .update({ yes_date: null })
            .eq("id", 1);
          setYesDate(null);
        }}
        className="mr-2"
      >
        Reset yes date
      </button>
    </div>
  );
}
