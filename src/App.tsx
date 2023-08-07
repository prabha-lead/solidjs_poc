import { Component, createSignal } from "solid-js";

const Registration: Component = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [name, setName] = createSignal("");
  const [dob, setDob] = createSignal("");

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log({
      email: email(),
      password: password(),
      name: name(),
      dob: dob(),
    });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email()}
            onInput={(e: Event) =>
              setEmail((e.target as HTMLInputElement).value)
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password()}
            onInput={(e: Event) =>
              setPassword((e.target as HTMLInputElement).value)
            }
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name()}
            onInput={(e: Event) =>
              setName((e.target as HTMLInputElement).value)
            }
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob()}
            onInput={(e: Event) => setDob((e.target as HTMLInputElement).value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
