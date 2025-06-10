const { Content, Image, Contact } = require("./model");
const nodemailer = require('nodemailer');


exports.postContent = async (req, res) => {
    console.log('inside post content');

    try {
        const { title, text } = req.body
        const newContent = new Content({ title, text });
        await newContent.save();
        res.status(200).json('success')
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }

}

exports.postImage = async (req, res) => {
    console.log('inside post content');

    try {
        const { title, picture } = req.body
        const newContent = new Image({ title, picture });
        await newContent.save();
        res.status(200).json('success')
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }

}

exports.getContent=async(req,res)=>{
    console.log('inside get content');

    try {
        const data = await Content.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
    
}

exports.getImage=async(req,res)=>{
    console.log('inside get image');

    try {
        const data = await Image.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
    
}

// contact
exports.submitContactForm = async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    // Store in DB
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

    // Setup mailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'amaldev1845@gmail.com',
        pass: 'nyhwzbgbgwmveabx' 
      }
    });

    // Mail to admin
    await transporter.sendMail({
      from: 'amaldev1845@gmail.com',
      to: 'amaldev1845@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Form Entry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Mail to user
    await transporter.sendMail({
      from: 'amaldev1845@gmail.com',
      to: email,
      subject: 'Thank you for contacting Dia-Vets',
      html: `<p>Hi ${name},</p><p>We've received your message and will get back to you soon.</p><p>- Dia-Vets Team</p>`
    });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};