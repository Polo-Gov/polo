const axios = require("axios");
require("dotenv").config();

const uploadJSONIPFS = async (information) => {
  try {
    const res = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data: JSON.stringify(information),
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlNmQ0Mzg3My1mNTJlLTQ0YmUtOGY2OS0xNDZiNzZhMjgzZTgiLCJlbWFpbCI6ImhlbnJpcXVlLm1hdGlhc0Bzb3UuaW50ZWxpLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5OTJlZDU5MGYxNzE1YWNjZmU5MiIsInNjb3BlZEtleVNlY3JldCI6IjdkNzQ5ZGEwYzY0Mjk2N2U0OGUxYTAwOTZhMDM4YTFkZDRlMDQxZmQ5YmNiZGNjNzI1YWQzYzViNjJkMjcyMDQiLCJpYXQiOjE2NzA3MjQ5MTl9.jUmvotUIm3XcD8AheAQT43R99E5W_zhVYpWG2aTtqZ8`,
        "Content-Type": "application/json",
      },
    });
    return `https://ipfs.io/ipfs/${res.data.IpfsHash}`;
  } catch {
    (err) => {
      return err;
    };
  }
};

module.exports = uploadJSONIPFS;
