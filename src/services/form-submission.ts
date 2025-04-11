
/**
 * Represents the data structure for a contact form submission.
 */
export interface FormSubmission {
  /**
   * The name of the person submitting the form.
   */
  name: string;
  /**
   * The email address of the person submitting the form.
   */
  email: string;
  /**
   * The message content from the form submission.
   */
  message: string;
}

/**
 * Asynchronously submits a contact form. This function will send the form data
 * to a specified endpoint (e.g., Formspree, EmailJS, or a custom API).
 *
 * @param submission The form submission data to be sent.
 * @returns A promise that resolves when the form is successfully submitted.  May return error if submission fails.
 */
export async function submitForm(submission: FormSubmission): Promise<void> {
  // Using Formspree
  const endpoint = "https://formspree.io/f/your-form-id"; // Replace with your Formspree endpoint

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    const message = `Form submission failed: ${response.status}`;
    throw new Error(message);
  }

  return;
}
