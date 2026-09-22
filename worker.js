export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const text = url.searchParams.get("text") || "Нет данных";

    await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: env.CHAT_ID,
        text: text
      })
    });

    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
