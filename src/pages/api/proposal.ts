import type { APIRoute } from "astro";
import { supabase } from "@/core/infra/db";

export const GET: APIRoute = async () => {
  try {
    let { data: proposal, error } = await supabase.from("proposal").select("*");

    return new Response(JSON.stringify(proposal), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch proposal data",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
