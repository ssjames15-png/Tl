export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/send") {
      const text = url.searchParams.get("text") || "Нет данных";

      const response = await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: env.CHAT_ID,
            text: text
          })
        }
      );

      if (!response.ok) {
        return new Response("Ошибка Telegram", { status: 500 });
      }

      return new Response("ok");
    }

    return new Response("Telegram Worker работает!");
  }
};
