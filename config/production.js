module.exports = {
    MONGOURL:process.env.MONGOURL,
    //jwt verifications
    JWT_ADMIN:process.env.JWT_A,
    JWT_USER:process.env.JWT_U,
    JWT_STUDENT:process.env.JWT_S,
    //twilio services 
    serviceID:process.env.TWILIO_SERVICE_ID,
    accountSID:process.env.TWILIO_ACCOUNT_SID,
    authToken:process.env.TWILIO_AUTH_TOKEN,
    //nodemailer
    EMAIL:process.env.EMAIL,
    PASS:process.env.PASS
  };
  