// RegisterComponent.tsx
import { useEffect, useState } from 'react';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const RegisterComponent: React.FC = () => {
  const [contract, setContract] = useState<any>(null);

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        // If used on the FRONTEND, pass your 'clientId'
        // If used on the BACKEND, pass your 'secretKey'
        const sdk = new ThirdwebSDK("binance-testnet", {
          clientId: "ff0c6e37ec8816a644a927e1aa5e875a",
          // secretKey: "pNgsaWJ4A4Z7Uka6WQwX7dLcrOgmqyUbxT_iJ_46RwwjJEOArvSdFvKBN6f0iSwkN4fCIGZuuO7lYILyEj1ipg",
        });

        const contractInstance = await sdk.getContract("0xD7AE5D5636E2fE85F14292c3FD50454Edfb0cc08");
        setContract(contractInstance);
      } catch (error) {
        console.error("Error initializing SDK:", error);
      }
    };

    initializeSDK();
  }, []);

  const handleRegister = async () => {
    try {
      // Call the contract function for registration here
      // For example: await contract.registerUser("your_parameters");
      // Make sure to replace "registerUser" and "your_parameters" with actual contract function and parameters
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div>
      <h1>Register Component</h1>
      {contract ? (
        <button onClick={handleRegister}>Register User</button>
      ) : (
        <p>Loading contract...</p>
      )}
    </div>
  );
};

export default RegisterComponent;
