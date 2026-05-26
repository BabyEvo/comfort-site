import { useState } from "react";
import "./App.css";

const cards = [
  {
    icon: "♡",
    title: "I feel lonely",
    text: "You are not alone right now.\nEven if I’m not answering instantly,\nI still care about you.\nTake a slow breath.\nYou’re safe in this moment.",
  },
  {
    icon: "☁",
    title: "I’m overthinking",
    text: "Your mind is trying to protect you, but it doesn’t have to solve everything tonight. One thought at a time. One breath at a time.",
  },
  {
    icon: "☾",
    title: "I can’t sleep",
    text: "Relax your shoulders. Unclench your jaw. Let your body know it doesn’t have to stay on guard all night.",
  },
  {
    icon: "♡",
    title: "I miss him",
    text: "Missing someone does not mean you made the wrong choice. It means your heart is adjusting. Healing can feel confusing, but you’re doing okay and you Will be Okay.",
  },
  {
    icon: "⌁",
    title: "Distract me",
    text: "Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 kind thing about yourself.",
  },
];

const reminders = [
  "This feeling is heavy, but it is not forever.",
  "You are not a burden for needing comfort.",
  "You made it through hard days before.",
  "You don’t have to heal everything tonight.",
  "Mick cares about you, even when he is busy.",
];

const contactLink = () => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    return "sms:+14386802575?body=Hey Mick, I need you right now.";
  }

  return "https://discord.com/users/1295530131707793409";
};

function App() {
  const [selected, setSelected] = useState(cards[0]);
  const [catMood, setCatMood] = useState(
    "Hi, I’m your grey Maine Coon ♡\nI’m here with you."
  );
  const [musicOn, setMusicOn] = useState(false);
  const [rainOn, setRainOn] = useState(true);
  const [reminder, setReminder] = useState(reminders[0]);

  const toggleMusic = () => {
    const audio = document.getElementById("comfort-music");
    if (!audio) return;

    if (musicOn) {
      audio.pause();
    } else {
      audio.volume = 0.35;
      audio.play();
    }

    setMusicOn(!musicOn);
  };

  const randomReminder = () => {
    const next = reminders[Math.floor(Math.random() * reminders.length)];
    setReminder(next);
  };

  return (
    <main className="app">
      <audio id="comfort-music" src="/loading.wav" loop />
      {rainOn && <div className="rain"></div>}

      <aside className="sidebar">
        <div className="logoText">
          A small place
          <br />
          for you ♡
        </div>

        <nav className="menu">
          {cards.map((card) => (
            <button
              key={card.title}
              className={`menuItem ${
                selected.title === card.title ? "active" : ""
              }`}
              onClick={() => setSelected(card)}
            >
              <span>{card.icon}</span>
              {card.title}
            </button>
          ))}

          <button
            className="menuItem"
            onClick={() =>
              alert(
                "Breathe in slowly… hold for 5 seconds… breathe out slowly. Do it 5 times and at the end, Tell yourself that You’re Strong and that Everything Will Be Okay."
              )
            }
          >
            <span>≋</span>
            Breathe with me
          </button>

          <a
            className="menuItem"
            href={contactLink()}
            target="_blank"
            rel="noreferrer"
          >
            <span>✈</span>
            Message Mick
          </a>
        </nav>

        <div className="sideNote">
          You don’t have to heal everything today. Just make it through this
          moment.
          <br />
          I’m proud of you for still being here. ♡
        </div>
      </aside>

      <section className="mainPanel">
        <section className="hero glass">
          <h1>For when the night feels heavy ♡</h1>
          <p>
            I made this so you have somewhere soft to come back to when you feel
            lonely, overwhelmed, or like you need a little reminder that you
            matter.
          </p>
        </section>

        <section className="comfortCard glass">
          <div className="cardHeader">
            <span>♡</span>
            <h2>{selected.title}</h2>
            <span>♡</span>
          </div>

          <p className="selectedText">{selected.text}</p>

          <div className="littleThings">✧ Little things for you</div>

          <button className="reminderBtn" onClick={randomReminder}>
            Give me a small reminder ✨
          </button>

          <div className="reminderBox">
            {reminder}
            <br />♡
          </div>

          <div className="quickActions">
            <a
              href={contactLink()}
              target="_blank"
              rel="noreferrer"
              className="quickBtn"
            >
              💬
              <span>Message Mick</span>
            </a>

            <button className="quickBtn" onClick={toggleMusic}>
              ♪
              <span>{musicOn ? "Pause Music" : "Play Music"}</span>
            </button>

            <button className="quickBtn" onClick={() => setRainOn(!rainOn)}>
              ☔
              <span>{rainOn ? "Rain Off" : "Rain On"}</span>
            </button>
          </div>
        </section>

        <p className="bottomQuote">
          ✧ “Breathe in… hold… breathe out…” ✧
          <br />
          You’re doing better than you think.
        </p>
      </section>

      <section className="catPanel">
        <div className="musicCard glass">
          <div className="musicIcon">♫</div>
          <div>
            <strong>loading.wav</strong>
            <p>{musicOn ? "Playing..." : "Paused"}</p>
          </div>
          <button onClick={toggleMusic}>{musicOn ? "Ⅱ" : "▶"}</button>
        </div>

        <div className="speechBubble glass">{catMood}</div>

        <button
          className="catClickZone"
          onClick={() =>
            setCatMood("The kitty gently looks at you.\nShe is staying close.")
          }
          aria-label="Interact with the grey Maine Coon"
        ></button>

        <div className="heartFloat">♡</div>

        <div className="catActions">
          <button
            onClick={() =>
              setCatMood("The kitty purrs softly.\nShe feels safe with you.")
            }
          >
            <span>♡</span>
            Pet kitty
            <small>The kitty purrs softly.</small>
          </button>

          <button
            onClick={() =>
              setCatMood(
                "The kitty curls up next to you\nso you don’t feel alone."
              )
            }
          >
            <span>♡</span>
            Cuddle kitty
            <small>The kitty curls up next to you.</small>
          </button>

          <button
            onClick={() =>
              setCatMood("The kitty listens quietly.\nYou can tell her anything.")
            }
          >
            <span>☁</span>
            Talk to kitty
            <small>The kitty listens to you.</small>
          </button>
        </div>

        <button
          className="watchKitty glass"
          onClick={() => setCatMood("The kitty looks out the window with you.")}
        >
          👁 Watch kitty
          <small>The kitty looks out the window with you.</small>
        </button>
      </section>
    </main>
  );
}

export default App;