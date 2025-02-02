import { supabase } from "@/core/infra/db";
import { useEffect, useState } from "react";

export function YesBlock() {
  const [message, setMessage] = useState("");
  const [showQuestion, setShowQuestion] = useState(null);
  const [yesDate, setYesDate] = useState(null);

  useEffect(() => {
    const getMessage = async () => {
      const { data, error } = await supabase
        .from("proposal")
        .select("message, show_question, yes_date")
        .eq("id", 1)
        .single();

      if (error) {
        console.error("Error fetching message:", error);
        return;
      }

      if (data) {
        setMessage(data.message);
        setShowQuestion(data.show_question);
        setYesDate(data.yes_date);
      }
    };

    getMessage();

    const connection = supabase
      .channel("proposal")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "proposal",
          filter: "id=eq.1",
        },
        (payload) => {
          if (payload.new.message) {
            setMessage(payload.new.message);
          }

          if (payload.new.show_question !== showQuestion) {
            setShowQuestion(payload.new.show_question);
          }

          if (payload.new.yes_date !== yesDate) {
            setYesDate(payload.new.yes_date);
          }
        }
      )
      .subscribe();

    () => connection.unsubscribe();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-8 max-w-lg">
      <div className="bg-white text-fuchsia-800 text-xl rounded-lg shadow-lg p-6">
        <p className="text-3xl">
          <span className="w-20 geo-font"> Geovanna </span>
          <img
            src="/images/geo-heart.png"
            alt="heart"
            className="size-[1em] inline"
          />
        </p>
        <p className="mt-4 text-center h-12">{message}</p>

        <div className="justify-center items-center flex flex-col gap-2">
          {showQuestion ? (
            <>
              <p>Quieres ser mi novia? 🍑</p>

              <div className="justify-center items-center flex gap-10">
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  No
                </button>
                <button
                  type="button"
                  disabled={typeof yesDate === "string"}
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={async () => {
                    await supabase
                      .from("proposal")
                      .update({
                        yes_date: new Date().toISOString(),
                      })
                      .eq("id", 1);
                  }}
                >
                  Sí
                </button>
              </div>
            </>
          ) : null}
          {yesDate ? (
            <div className=" text-xl text-center p-6">
              Geovanna y Tona empezaron a salir el
              <p>
                {new Date(yesDate).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
