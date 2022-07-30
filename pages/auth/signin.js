import React, { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

const SignIn = () => {
  const [providers, setProviders] = useState({});

  useEffect(() => {
    (async () => {
      const providers = await getProviders();
      setProviders(providers);
    })();
  }, []);

  console.log(providers);
  return (
    <>
      {providers &&
        Object?.values(providers)?.map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
};

export default SignIn;
