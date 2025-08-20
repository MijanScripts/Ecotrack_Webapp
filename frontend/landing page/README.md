# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


### **How to setup the Emailjs without using Backend API**

**First Step**
- 🔹 1. Create an EmailJS Account
  <!-- Go to the link and sign up for a free account. -->
  [goto](https://www.emailjs.com/)

**Second Step**
- 🔹 2. Add an Email Service
   - Once you're in your EmailJS dashboard:
   - Go to the Email Services tab.
   - Click “Add new service”
   - Choose an email provider like:
   - Gmail (easy to set up), Outlook, Yahoo, etc.
   - Follow the steps to authorize your email account.
   - You’ll then get a Service ID (e.g. service_xxx123).   

**Third Step**
- 🔹 3. Create an Email Template
   - Go to the Email Templates tab.
   - Click “Create new template”.
   - Customize the message body using placeholders like this below:
   ```txt
    First Name: {{first_name}}
    Last Name: {{last_name}}
    Email: {{user_email}}
    Message: {{message}}
   ```
   - Save the template.
   - You’ll get a Template ID (e.g. template_abc456).

**Fourth Step**
- 🔹 4. Get Your Public Key
  - Click on your profile icon → Account → API Keys.
  - Copy your Public Key (e.g. eBEXAMPLE90dfT1).

**Fifth Step**
- 🔹 5. Use These in Your React App
  - Replace in your emailjs.sendForm call:
  ```js
  emailjs.sendForm(
  'your_service_id',      // <- from step 2
  'your_template_id',     // <- from step 3
  form.current, 
  'your_public_key'       // <- from step 4
    )
  ```


### ✅ EmailJS is now set up
*When a user submits the form:*

*You’ll receive an email at the connected address.*

*You can view logs in the EmailJS dashboard.*











