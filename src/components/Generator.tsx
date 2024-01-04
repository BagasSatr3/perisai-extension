import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavGenerator from "./NavGenerator";
import { MdContentCopy } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";

const generateRandomPassword = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

const generateRandomUsername = () => {
  const names = [
    "John",
    "Alice",
    "Bob",
    "Eva",
    "Charlie",
    "user1",
    "cool_gamer",
    "web_dev_42",
    "coding_ninja",
    "awesome_user",
    "ts_lover",
    "code_master",
    "username123",
    "dev_guru",
    "tech_enthusiast",
    "js_expert",
    "designer_87",
    "code_snippet",
    "geeky_programmer",
    "coffee_coder",
    "coding_pro",
    "typescript_rocks",
    "dev_dude",
    "code_artist",
  ];
  const symbols = ["_", "-", "@", "#", "$"];
  const randomNumber = Math.floor(Math.random() * 100);

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)];

  return `${randomName}${randomNumber}${randomSymbol}${randomSymbol2}`;
};

function Generator() {
  const [generatedText, setGeneratedText] = useState("");
  const [selectedOption, setSelectedOption] = useState("password");
  const [showAlert, setShowAlert] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    // Generate text immediately when radio button changes
    if (event.target.value === "password") {
      setGeneratedText(generateRandomPassword(12)); // Change the length as needed
    } else {
      setGeneratedText(generateRandomUsername());
    }
  };

  const FloatingAlert = ({ message }) => (
    <div className="fixed top-0 right-0 m-2 p-2 bg-gray-500 text-white rounded">
      {message}
    </div>
  );

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(generatedText)
      .then(() => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000); // Display alert for 2 seconds
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard.", error);
      });
  };

  useEffect(() => {
    setGeneratedText(generateRandomPassword(12));
  }, []);
  return (
    <div className="flex flex-col min-h-screen text-white">
      <NavGenerator />
      <div className="m-2">
        <div className="p-4 border rounded flex gap-3">
          <p className="text-lg flex-grow">{generatedText}</p>
          <SlRefresh
            size={24}
            onClick={(event) =>
              handleOptionChange({ target: { value: selectedOption } })
            }
            className="cursor-pointer"
          />

          <MdContentCopy
            size={24}
            onClick={handleCopyToClipboard}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className=" m-2 gap-3 flex-grow">
        <p className="text-sm m-1">What would you like to generate?</p>
        <div className="types shadow-xl types rounded mb-2">
          <div className="p-3 flex flex-col gap-3">
            <label className="text-sm">
              <input
                type="radio"
                className="mx-1"
                value="password"
                checked={selectedOption === "password"}
                onChange={handleOptionChange}
              />
              Password
            </label>

            <label className="text-sm">
              <input
                type="radio"
                className="mx-1"
                value="username"
                checked={selectedOption === "username"}
                onChange={handleOptionChange}
              />
              Username
            </label>
          </div>
        </div>
        {showAlert && <FloatingAlert message="Text copied to clipboard!" />}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Generator;
