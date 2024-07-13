module.exports = {
    /**
     * Simple example.
     * Every monday at 1am.
     */
  
    SendEmailToUser: {
      task: ({ strapi }) => {
        // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
        // entityservice can be used here to get email id and then send email to user at perticular time
        // console.log("Cron jobs...")
      },
      options: {
        // rule: "*/10 * * * * *",
        rule: "* * * * * *",
      },
    },
  };
  