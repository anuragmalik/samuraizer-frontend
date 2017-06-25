const sample_mail = {
  "headers": {
    "Avatar":"https://react.semantic-ui.com/assets/images/avatar/large/matthew.png",
    "Date": "Sat, 24 Jun 2017 17:00:01 +0000",
    "From": "Jane Jones <jane_jones@example.com>",
    "To": "David Beckham <david_bec@example.co.uk>",
    "Subject": "Editorial Assistant Position - Jane Jones"
  },
  "plain": `Dear Hiring Manager,

I would like to express my interest in a position as editorial assistant for your publishing company.

As a recent graduate with writing, editing, and administrative experience, I believe I am a strong candidate for a position at the 123 Publishing Company. You specify that you are looking for someone with strong writing skills. As an English major, a writing tutor, and an editorial intern for both a government magazine and a college marketing office, I have become a skilled writer with a variety of experience.

My maturity, practical experience, and eagerness to enter the publishing business will make me an excellent editorial assistant. I would love to begin my career with your company, and am confident that I would be a beneficial addition to the 123 Publishing Company.

I have enclosed my resume, and will call within the next week to see if we might arrange a time to speak together.

Thank you so much for your time and consideration.

Sincerely,

Jane Jones`
}

const emails = [];
for (let i = 0; i < 10; i++) {
  sample_mail.key = i;
  emails.push(sample_mail);
}

export default emails
