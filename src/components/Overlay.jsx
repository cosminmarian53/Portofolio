import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import "../App.css";
const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center poppins-regular p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center poppins-regular justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white details-card rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="poppins-bold text-2xl">Hello, I'm Cosmin 👋</h1>
          <p className="text-gray-500">This is my portfolio!</p>
          <p className="mt-3">Some things about me:</p>
          <ul className="leading-9">
            <li>🧑‍💻 I'm an Information Technology student</li>
            <li>👨‍💻 I'm a Junior blockchain developer</li>
            <li>
              📊 Additionally, I'm deeply interested in Finance, Music and
              Philosophy
            </li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">
            PS: I've led and contributed to projects across Web3, blockchain,
            and full-stack web development.
          </p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>React.js</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
          <p className="mt-3">
            <b>Blockchain ⛓️</b>
          </p>
          <ul className="leading-9">
            <li>Solidity</li>
            <li>Rust</li>
            <li>Ethereum</li>
            <li>Solana</li>
            <li>Foundry</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>

        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">🤙 Get in Touch</h1>
          <p className="text-gray-500">
            Ready to bring fresh energy and serious skills in full-stack and
            blockchain development. Let’s build something impactful together!
          </p>

          <p className="mt-3">
            📧{" "}
            <a href="mailto:cosminlavric53@gmail.com">
              cosminlavric53@gmail.com
            </a>
          </p>
          <p className="mt-3">
            🔗{" "}
            <a
              href="https://github.com/cosminmarian53"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p className="mt-3">
            💼{" "}
            <a
              href="https://www.linkedin.com/in/cosmin-marian-lavric-8454ab282/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>

          <p className="mt-3 font-semibold">Featured Projects:</p>
          <ul className="leading-8 list-disc list-inside">
            <li>
              <a
                href="https://cosminmarian53.github.io/Aliens-Vs-Robots/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aliens Vs. Robots
              </a>{" "}
              - An NFT-based interactive game made in React.js and with
              Solidity.
            </li>
            <li>
              <a
                href="https://solana-notes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solana Notes
              </a>{" "}
              - A CRUD dApp allowing users to share notes on Solana.
            </li>
            <li>
              <a
                href="https://style-design-uni-project.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Style Design: Furniture Website
              </a>{" "}
              - A modern furniture showcase website, demonstrating responsive
              design.
            </li>
          </ul>
          <p className="mt-3 text-gray-500">
            ...and there's more to explore on my{" "}
            <a
              href="https://github.com/cosminmarian53"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              GitHub
            </a>
            !
          </p>
          {/* cv */}
          <p className="mt-3">
            📄 For more details,{" "}
            <a
              href="https://drive.google.com/file/d/1OQguSwePN59bMSY-IEYlMihVqQml8Xvt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <b>check out my CV!</b>
            </a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
