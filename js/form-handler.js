
    document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form[data-form-handler]");

    forms.forEach((form) => {
        form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
        const successMessage = form.getAttribute("data-success") || "Message sent!";
        const errorMessage = form.getAttribute("data-error") || "Something went wrong.";

        try {
            const body = {};
            form.querySelectorAll("input, textarea, select").forEach((el) => {
            if (el.name) body[el.name] = el.value;
            });

            const response = await fetch("/form-submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            });

            if (!response.ok) throw new Error(await response.text());
            alert(successMessage);
            form.reset();
        } catch (error) {
            alert(`${errorMessage} (${error.message})`);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
        }
        });
    });
    });
    