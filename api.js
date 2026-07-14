async function saveQuizResponse(payload) {

    try {

        const body = new URLSearchParams();

        body.append("payload", JSON.stringify(payload));

        fetch(CONFIG.API_URL, {

            method: "POST",

            body: body,

            mode: "no-cors"

        });

        console.log("Payload Sent");

        return true;

    }

    catch (error) {

        console.error(error);

        return false;

    }

}
