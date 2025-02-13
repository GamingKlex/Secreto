import Entry from './entry';

const ENTRIES = [
  {
    title: "Why should I use a password generator?",
    content: "Using a password generator ensures that your passwords are strong, unique, and difficult to guess. This helps protect your accounts from hacking attempts and brute-force attacks."
  },
  {
    title: "How are the passwords generated?",
    content: "Our generator uses a secure randomization algorithm to create passwords with a mix of uppercase and lowercase letters, numbers, and special characters, depending on your selected preferences."
  },
  {
    title: "Are the generated passwords stored?",
    content: "No, we do not store any generated passwords. Once you leave the page, the generated password is lost, ensuring your security and privacy."
  },
  {
    title: "Can I customize the password length and character types?",
    content: "Yes! You can specify the length of the password and choose whether to include numbers, symbols, and uppercase/lowercase letters."
  },
  {
    title: "What is a passphrase, and why should I use one?",
    content: "A passphrase is a sequence of random words that are easier to remember but still highly secure. They are often used as an alternative to complex passwords because they offer strong protection while being more user-friendly."
  },
  {
    title: "Is this password generator safe to use?",
    content: "Yes! Our password generator runs entirely in your browser, meaning no data is sent over the internet. Your passwords are created locally on your device."
  },
  {
    title: "Can I use this for my business or team?",
    content: "Absolutely! Our password generator is free to use for individuals and businesses."
  }
];

export default function Faq() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-20 mb-14">
      <div className="text-center font-poppins text-2xl md:text-3xl font-bold">
        Frequently Asked Questions
      </div>

      <div className="flex flex-col divide-y divide-gray-300 mt-10">
        {ENTRIES.map((entry, index) => (
          <Entry key={index} title={entry.title}>
            {entry.content}
          </Entry>
        ))}
      </div>
    </div>
  );
}
