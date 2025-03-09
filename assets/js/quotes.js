import { TypingTest } from "./typing-test.js";

// Quotes Class.
export class Quotes {
  constructor(data) {
    /*
    this.quoteData = {
      docs: [
        {
          _id: "5cd96e05de30eff6ebcce80b",
          dialog: "Now come the days of the King. May they be blessed.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce80b",
        },
        {
          _id: "5cd96e05de30eff6ebcce82a",
          dialog: "Hobbits!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce82a",
        },
        {
          _id: "5cd96e05de30eff6ebcce832",
          dialog: "Be careful. Even in defeat, Saruman is dangerous.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce832",
        },
        {
          _id: "5cd96e05de30eff6ebcce836",
          dialog: "No, we need him alive. We need him to talk.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce836",
        },
        {
          _id: "5cd96e05de30eff6ebcce838",
          dialog:
            "Your treachery has already cost many lives. Thousands more are now at risk. But you could save them Saruman. You were deep in the enemy's counsel.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce838",
        },
        {
          _id: "5cd96e05de30eff6ebcce83b",
          dialog:
            "Farewell my brave Hobbits. My work is now finished. Here at last, on the shores of the sea, comes the end of our Fellowship. I will not say do not weep for not all tears are an evil. It is time Frodo.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce83b",
        },
        {
          _id: "5cd96e05de30eff6ebcce844",
          dialog: "Saruman! Your staff is broken!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce844",
        },
        {
          _id: "5cd96e05de30eff6ebcce84d",
          dialog:
            "End? No, the journey doesn't end here. Death is just another path, one that we all must take. The grey rain curtain of this world rolls back and all turns to silvered glass. And then you see it.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce84d",
        },
        {
          _id: "5cd96e05de30eff6ebcce850",
          dialog: "No! Come down, Saruman, and your life will be spared!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce850",
        },
        {
          _id: "5cd96e05de30eff6ebcce858",
          dialog: "No. No it isn't.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce858",
        },
        {
          _id: "5cd96e05de30eff6ebcce85a",
          dialog:
            "White shores and beyond, a far green country under a swift sunrise.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce85a",
        },
        {
          _id: "5cd96e05de30eff6ebcce85f",
          dialog:
            "Saruman! You were deep in the enemy's counsel. Tell us what you know!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce85f",
        },
        {
          _id: "5cd96e05de30eff6ebcce861",
          dialog:
            "Send word to all our allies and to every corner of Middle Earth that still stands free. The enemy moves against us. We need to know where he will strike.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce861",
        },
        {
          _id: "5cd96e05de30eff6ebcce865",
          dialog: "Peregrin Took. I'll take that my lad! Quickly now!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce865",
        },
        {
          _id: "5cd96e05de30eff6ebcce875",
          dialog:
            "Retreat! The city is breached. Fall back to the second level. Get the women and children out. Get them out. Retreat.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce875",
        },
        {
          _id: "5cd96e05de30eff6ebcce87f",
          dialog: "Fight! Fight to the last man. Fight for your lives.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce87f",
        },
        {
          _id: "5cd96e05de30eff6ebcce883",
          dialog: "Up! Quickly!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce883",
        },
        {
          _id: "5cd96e05de30eff6ebcce884",
          dialog:
            "Go back to the abyss! Fall into the nothingness that awaits you and your master!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce884",
        },
        {
          _id: "5cd96e05de30eff6ebcce893",
          dialog:
            "We do not come to treat with Sauron, faithless and accursed. Tell your master this. The armies of Mordor must disband. He is to depart these lands, never to return.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce893",
        },
        {
          _id: "5cd96e05de30eff6ebcce8a2",
          dialog: "Silence!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce8a2",
        },
        {
          _id: "5cd96e05de30eff6ebcce8a4",
          dialog: "Silence!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce8a4",
        },
        {
          _id: "5cd96e05de30eff6ebcce8b4",
          dialog: "Stay this madness!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce8b4",
        },
        {
          _id: "5cd96e05de30eff6ebcce8ba",
          dialog: "So passes Denethor, son of Ecthelion.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce8ba",
        },
        {
          _id: "5cd96e05de30eff6ebcce8f0",
          dialog: "Back to the gate! Hurry!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce8f0",
        },
        {
          _id: "5cd96e05de30eff6ebcce92f",
          dialog:
            "Prepare for battle. Hurry men! To the wall! Defend the wall! Over here! Return to your posts.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce92f",
        },
        {
          _id: "5cd96e05de30eff6ebcce930",
          dialog: "Send these foul beasts into the Abyss.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce930",
        },
        {
          _id: "5cd96e05de30eff6ebcce943",
          dialog:
            "Hold them back, do not give in to fear. Stand to your posts. Fight!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce943",
        },
        {
          _id: "5cd96e05de30eff6ebcce944",
          dialog: "Not at the towers! Aim for the trolls, kill the trolls!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce944",
        },
        {
          _id: "5cd96e05de30eff6ebcce946",
          dialog: "Bring them down!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce946",
        },
        {
          _id: "5cd96e05de30eff6ebcce948",
          dialog: "Fight them back!Peregrin Took! Go back to the Citadel.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce948",
        },
        {
          _id: "5cd96e05de30eff6ebcce949",
          dialog: "This is no place for a Hobbit!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce949",
        },
        {
          _id: "5cd96e05de30eff6ebcce94c",
          dialog:
            "Guard of the Citadel indeed! Now back up the hill quickly. Quick!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce94c",
        },
        {
          _id: "5cd96e05de30eff6ebcce9a6",
          dialog: "Foreseen and done nothing!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9a6",
        },
        {
          _id: "5cd96e05de30eff6ebcce9a7",
          dialog:
            "Faramir? This is not the first Halfling to have crossed your path.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9a7",
        },
        {
          _id: "5cd96e05de30eff6ebcce9ad",
          dialog: "Where? When?",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9ad",
        },
        {
          _id: "5cd96e05de30eff6ebcce9b8",
          dialog: "Sauron's wrath will be terrible, his retribution swift.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9b8",
        },
        {
          _id: "5cd96e05de30eff6ebcce9b9",
          dialog:
            "The battle for Helm's Deep is over. The battle for Middle-earth is about to begin.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9b9",
        },
        {
          _id: "5cd96e05de30eff6ebcce9ba",
          dialog: "All our hopes now lie with two little Hobbits...",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9ba",
        },
        {
          _id: "5cd96e05de30eff6ebcce9be",
          dialog:
            "Faramir! Faramir! Your father's will has turned to madness. Do not throw away your life so rashly.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9be",
        },
        {
          _id: "5cd96e05de30eff6ebcce9bf",
          dialog:
            "Your father loves you Faramir. He will remember it before the end.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9bf",
        },
        {
          _id: "5cd96e05de30eff6ebcce9c0",
          dialog: "And then the pass of Cirith Ungol.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9c0",
        },
        {
          _id: "5cd96e05de30eff6ebcce9c9",
          dialog: "Faramir tell me everything. Tell me all you know.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9c9",
        },
        {
          _id: "5cd96e05de30eff6ebcce9cb",
          dialog: "...somewhere in the wilderness.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9cb",
        },
        {
          _id: "5cd96e05de30eff6ebcce9f8",
          dialog: "Courage is the best defence that you have now.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcce9f8",
        },
        {
          _id: "5cd96e05de30eff6ebccea42",
          dialog:
            "Look to my coming at first light on the fifth day. At dawn, Iook to the east.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccea42",
        },
        {
          _id: "5cd96e05de30eff6ebccea47",
          dialog: "Theoden King stands alone.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccea47",
        },
        {
          _id: "5cd96e05de30eff6ebccebdd",
          dialog: "Theodred's death was not of your making.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccebdd",
        },
        {
          _id: "5cd96e05de30eff6ebccebdf",
          dialog:
            "He was strong in life. His spirit will find its way to the halls of your fathers. Westu h'l. Fer'u, Th'odred, Fer'u.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccebdf",
        },
        {
          _id: "5cd96e05de30eff6ebccebe8",
          dialog:
            "The veiling shadow that glowers in the east takes shape. Sauron will suffer no rival. From the summit of Barad-dur his Eye watches ceaselessly. But he is not so mighty yet that he is above fear. Doubt ever gnaws at him. The rumor has reached him. The heir of Numenor still lives.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccebe8",
        },
        {
          _id: "5cd96e05de30eff6ebccebfd",
          dialog:
            "This is but a taste of the terror that Saruman will unleash. All the more potent for he is driven now by fear of Sauron. Ride out and meet him head on. Draw him away from your women and children. You must fight.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccebfd",
        },
        {
          _id: "5cd96e05de30eff6ebccec03",
          dialog: "Helm's Deep.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec03",
        },
        {
          _id: "5cd96e05de30eff6ebccec06",
          dialog:
            "There is no way out of that ravine. Theoden is walking into a trap. He thinks he's leading them to safety. What they will get is a massacre. Theoden has a strong will, but I fear for him. I fear for the survival of Rohan. He will need you before the end, Aragorn. The people of Rohan will need you. The defenses, to hold.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec06",
        },
        {
          _id: "5cd96e05de30eff6ebccec11",
          dialog:
            "Sauron fears you, Aragorn. He fears what you may become. And so he'll strike hard and fast at the world of Men. He will use his puppet Saruman to destroy Rohan. War is coming. Rohan must defend itself and therein lies our first challenge, for Rohan is weak and ready to fall. The king's mind is enslaved. It's an old device of Saruman's. His hold over King Theoden is now very strong. Sauron and Saruman are tightening the noose. But for all their cunning, we have one advantage. The Ring remains hidden. And that we should seek to destroy it has not yet entered their darkest dreams. And so the weapon of the enemy is moving towards Mordor in the hands of a Hobbit. Each day brings it closerto the fires of Mount Doom. We must trust now in Frodo. Everything depends upon speed and the secrecy of his quest.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec11",
        },
        {
          _id: "5cd96e05de30eff6ebccec12",
          dialog: "Did he? Did he, indeed? Good. Yes, very good.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec12",
        },
        {
          _id: "5cd96e05de30eff6ebccec18",
          dialog:
            "Do not regret your decision to leave him.Frodo must finish this task alone.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec18",
        },
        {
          _id: "5cd96e05de30eff6ebccec43",
          dialog:
            "The Grey Pilgrim. That's what they used to call me. Three hundred lives of Men I've walked this earth, and now I have no time. With luck, my search will not be in vain. Look to my coming at first light on the fifth day. At dawn, look to the east.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec43",
        },
        {
          _id: "5cd96e05de30eff6ebccec8a",
          dialog: "You shall not pass!",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec8a",
        },
        {
          _id: "5cd96e05de30eff6ebccec8c",
          dialog:
            "I am a servant of the Secret Fire, wielder of the flame of Anor. Go back to the Shadow.The dark fire will not avail you,flame of Udun!",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec8c",
        },
        {
          _id: "5cd96e05de30eff6ebccec8e",
          dialog: "You cannot pass!",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccec8e",
        },
        {
          _id: "5cd96e05de30eff6ebcceca2",
          dialog:
            "You are soldiers of Gondor. No matter what comes through that gate you will stand your ground.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceca2",
        },
        {
          _id: "5cd96e05de30eff6ebcceca3",
          dialog: "Steady! Steady!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceca3",
        },
        {
          _id: "5cd96e05de30eff6ebcceca6",
          dialog: "Volley! Fire!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceca6",
        },
        {
          _id: "5cd96e05de30eff6ebccecab",
          dialog:
            "Peregrin Took my lad, there is a task now to be done. Another opportunity for one of the Shire folk to prove their great worth. You must not fail me.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccecab",
        },
        {
          _id: "5cd96e05de30eff6ebcceced",
          dialog: "Fly, you fools!",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceced",
        },
        {
          _id: "5cd96e05de30eff6ebcced1f",
          dialog: "Amon D'n.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcced1f",
        },
        {
          _id: "5cd96e05de30eff6ebcced24",
          dialog: "Hope is kindled!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcced24",
        },
        {
          _id: "5cd96e05de30eff6ebcced39",
          dialog:
            "Frodo has passed beyond my sight. The darkness is deepening.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcced39",
        },
        {
          _id: "5cd96e05de30eff6ebcced3d",
          dialog:
            "It's only a matter of time. He has suffered a defeat, yes, but behind the walls of Mordor our enemy is regrouping.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcced3d",
        },
        {
          _id: "5cd96e05de30eff6ebcced45",
          dialog: "Because 10,000 Orcs now stand between Frodo and Mount Doom.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcced45",
        },
        {
          _id: "5cd96e05de30eff6ebccedba",
          dialog:
            "Edoras and the Golden Hall of Meduseld. There dwells Theoden, King of Rohan, whose mind is overthrown. Saruman's hold over King Theoden is now very strong.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccedba",
        },
        {
          _id: "5cd96e05de30eff6ebccedbb",
          dialog: "Be careful what you say. Do not look for welcome here.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccedbb",
        },
        {
          _id: "5cd96e05de30eff6ebccedc3",
          dialog: "Sauron will suspect a trap. He will not take the bait.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccedc3",
        },
        {
          _id: "5cd96e05de30eff6ebccedcd",
          dialog: "I've sent him to his death.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccedcd",
        },
        {
          _id: "5cd96e05de30eff6ebccede6",
          dialog:
            "You're in the service of the steward now. You'll have to do as you are told Peregrin Took.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccede6",
        },
        {
          _id: "5cd96e05de30eff6ebccede7",
          dialog: "Ridiculous Hobbit! Guard of the Citadel!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccede7",
        },
        {
          _id: "5cd96e05de30eff6ebccede8",
          dialog: "Thank you.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccede8",
        },
        {
          _id: "5cd96e05de30eff6ebccedec",
          dialog: "Yes.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccedec",
        },
        {
          _id: "5cd96e05de30eff6ebccedef",
          dialog: "It's the deep breath before the plunge.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccedef",
        },
        {
          _id: "5cd96e05de30eff6ebccedf1",
          dialog:
            "There never was much hope. Just a fool's hope. Our enemy is ready. His full strength's gathered. Not only orcs, but men as well, Legions of Haradrim from the South, mercenaries from the coast, All will answer Mordor's call.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccedf1",
        },
        {
          _id: "5cd96e05de30eff6ebccee0f",
          dialog: "Frodo, come and help an old man,How's your shoulder?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee0f",
        },
        {
          _id: "5cd96e05de30eff6ebccee26",
          dialog: "The Fellowship awaits the Ringbearer.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee26",
        },
        {
          _id: "5cd96e05de30eff6ebccee27",
          dialog: "Left.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee27",
        },
        {
          _id: "5cd96e05de30eff6ebccee2b",
          dialog:
            "We must hold this course west of the Misty Mountains for forty days. If our luck holds the Gap of Rohan will still be open to us. and there are road turns east to Mordor.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee2b",
        },
        {
          _id: "5cd96e05de30eff6ebccee30",
          dialog:
            "No Gimli, I would not take the road through Moria unless I had no other choice.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee30",
        },
        {
          _id: "5cd96e05de30eff6ebccee54",
          dialog: "Hmmm, you would not part an old man from his walking stick.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee54",
        },
        {
          _id: "5cd96e05de30eff6ebccee57",
          dialog:
            "The courtesy of your hall is somewhat lessened of late......Theoden King.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee57",
        },
        {
          _id: "5cd96e05de30eff6ebccee64",
          dialog:
            "Be silent. Keep your forked tongue behind your teeth. I have not passed through fire and death......to bandy crooked words with a witless worm.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee64",
        },
        {
          _id: "5cd96e05de30eff6ebccee74",
          dialog:
            "Sauron has yet to show his deadliest servant. The one who will lead Mordor's army in war. The one they say no living man can kill. The Witch King of Angmar. You've met him before. He stabbed Frodo on Weathertop. He is the lord of the Nazg'l. The greatest of the nine.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee74",
        },
        {
          _id: "5cd96e05de30eff6ebccee7b",
          dialog:
            "This will be the end of Gondor as we know it. Here the hammer stroke will fall hardest. If the river is taken, if the garrison at Osgiliath falls, the last defence of this city will be gone.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccee7b",
        },
        {
          _id: "5cd96e05de30eff6ebcceea1",
          dialog:
            "and the Ring?, You feel its power growing don't you. I've felt it too. You must be careful now. Evil will be drawn to you from outside the Fellowship and I fear from within.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceea1",
        },
        {
          _id: "5cd96e05de30eff6ebcceea3",
          dialog: "You must trust to yourself. Trust your own strength.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceea3",
        },
        {
          _id: "5cd96e05de30eff6ebcceea6",
          dialog:
            "There are many powers in this world for good or for evil. Some are greater than I am and against some I have not yet been tested",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceea6",
        },
        {
          _id: "5cd96e05de30eff6ebcceeab",
          dialog:
            'It reads "The Doors of Durin, Lord of Moria, Speak Friend and Enter"',
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceeab",
        },
        {
          _id: "5cd96e05de30eff6ebcceead",
          dialog:
            "Oh it's quite simple. If you are a friend, you speak the password and the doors will open, Annon Edhellen, edro hi ammen! (",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceead",
        },
        {
          _id: "5cd96e05de30eff6ebcceeae",
          dialog: "Fennas Nogothrim, lasto beth lammen.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceeae",
        },
        {
          _id: "5cd96e05de30eff6ebcceeb7",
          dialog:
            "Yes Gimli! Their own masters cannot find them, if their secrets are forgotten!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceeb7",
        },
        {
          _id: "5cd96e05de30eff6ebcceed5",
          dialog:
            "Spies of Saruman. The passage south is being watched, We must take the Pass of Caradhras",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceed5",
        },
        {
          _id: "5cd96e05de30eff6ebcceedd",
          dialog:
            "Ash nazg durbatul'k, ash nazg gimbatul ash nazg thrakatul'k,agh burzum-ishi krimpatul.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceedd",
        },
        {
          _id: "5cd96e05de30eff6ebcceedf",
          dialog:
            "I do not ask your pardon Master Elrond for the Black Speech of Mordor may yet be heard in every corner of the West, The Ring is altogether evil",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceedf",
        },
        {
          _id: "5cd96e05de30eff6ebcceee5",
          dialog: "Aragorn is right. We cannot use it.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceee5",
        },
        {
          _id: "5cd96e05de30eff6ebcceef1",
          dialog:
            "Theoden, son of Thengel, too long have you sat in the Shadows.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceef1",
        },
        {
          _id: "5cd96e05de30eff6ebcceef3",
          dialog: "Hearken to me! I release you......from the spell.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceef3",
        },
        {
          _id: "5cd96e05de30eff6ebcceef5",
          dialog: "I will draw you, Saruman, as poison is drawn from a wound.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceef5",
        },
        {
          _id: "5cd96e05de30eff6ebcceefa",
          dialog: "You did not kill me......you will not kill him.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceefa",
        },
        {
          _id: "5cd96e05de30eff6ebcceefb",
          dialog: "Be gone.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebcceefb",
        },
        {
          _id: "5cd96e05de30eff6ebccef02",
          dialog: "You are tracking the footstepsof two young Hobbits.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef02",
        },
        {
          _id: "5cd96e05de30eff6ebccef08",
          dialog: "Breathe the free air again, my friend.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef08",
        },
        {
          _id: "5cd96e05de30eff6ebccef0b",
          dialog: "I am Saruman.Or rather, Sarumanas he should have been.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef0b",
        },
        {
          _id: "5cd96e05de30eff6ebccef0d",
          dialog: "Through fire.....and water.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef0d",
        },
        {
          _id: "5cd96e05de30eff6ebccef0e",
          dialog:
            "From the lowest dungeon to the highest peak...... I fought with the Balrog of Morgoth.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef0e",
        },
        {
          _id: "5cd96e05de30eff6ebccef0f",
          dialog:
            "Until at last I threw down my enemy and smote his ruin upon the mountainside.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef0f",
        },
        {
          _id: "5cd96e05de30eff6ebccef13",
          dialog: "We come to it at last.The great battle of our time.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef13",
        },
        {
          _id: "5cd96e05de30eff6ebccef15",
          dialog: "The board is set, the pieces are moving.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef15",
        },
        {
          _id: "5cd96e05de30eff6ebccef19",
          dialog: "Gwaihir go! Gwaihir",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef19",
        },
        {
          _id: "5cd96e05de30eff6ebccef4b",
          dialog:
            "I once knew every spell in all the tongues of elves, men and orcs",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef4b",
        },
        {
          _id: "5cd96e05de30eff6ebccef4f",
          dialog: "Oh it's useless!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef4f",
        },
        {
          _id: "5cd96e05de30eff6ebccef52",
          dialog: "Mel..lon",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef52",
        },
        {
          _id: "5cd96e05de30eff6ebccef53",
          dialog: "Ando Eldarinwa'a lasta quettanya, Fenda Casarinwa'",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef53",
        },
        {
          _id: "5cd96e05de30eff6ebccef55",
          dialog:
            "Knock your head against these doors Peregrin Took! and if that does not shatter them and I'm allowed a little peace from foolish questions I will try to find the opening words.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef55",
        },
        {
          _id: "5cd96e05de30eff6ebccef75",
          dialog: "It's Saruman!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef75",
        },
        {
          _id: "5cd96e05de30eff6ebccef7d",
          dialog: "No! Losto Caradhras, sedho, hodo, nuitho i 'ruith!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef7d",
        },
        {
          _id: "5cd96e05de30eff6ebccef84",
          dialog:
            "Do you not understand that while we bicker amongst ourselves, Sauron's power grows?! None can escape it! You'll all be destroyed!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef84",
        },
        {
          _id: "5cd96e05de30eff6ebccef85",
          dialog:
            "Your fingers would remember their old strength better if they grasped your sword.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef85",
        },
        {
          _id: "5cd96e05de30eff6ebccef8e",
          dialog:
            "Stars wheeled overhead......and every day was as long as a life age of the Earth. But it was not the end. I felt life in me again.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef8e",
        },
        {
          _id: "5cd96e05de30eff6ebccef90",
          dialog: "Darkness took me......and I strayed out of thoughtand time.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef90",
        },
        {
          _id: "5cd96e05de30eff6ebccef91",
          dialog: "I've been sent back until my task is done.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef91",
        },
        {
          _id: "5cd96e05de30eff6ebccef93",
          dialog:
            "Gandalf? Yes. That was what they used to call me. Gandalf the Grey. That was my name.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef93",
        },
        {
          _id: "5cd96e05de30eff6ebccef96",
          dialog:
            "I am Gandalf the White. And I come back to you now at the turn of the tide.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef96",
        },
        {
          _id: "5cd96e05de30eff6ebccef98",
          dialog:
            "One stage of your journey is over. Another begins. We must travel to Edoras with all speed.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef98",
        },
        {
          _id: "5cd96e05de30eff6ebccef9a",
          dialog: "Yes, and it will not be easily cured.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef9a",
        },
        {
          _id: "5cd96e05de30eff6ebccef9c",
          dialog:
            "It was more than mere chance that brought Merry and Pippin to Fangorn. A great power has been sleeping here for many long years. The coming of Merry and Pippin will be like the falling of small stones that starts an avalanche in the mountains.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccef9c",
        },
        {
          _id: "5cd96e05de30eff6ebccefa6",
          dialog: "Is it secret? Is it safe?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefa6",
        },
        {
          _id: "5cd96e05de30eff6ebccefa8",
          dialog:
            "Hold out your hand Frodo. It's quite cool. What can you see? Can you see anything?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefa8",
        },
        {
          _id: "5cd96e05de30eff6ebccefa9",
          dialog:
            "A thing is about to happen that has not happened since the Elder Days. The Ents are going to wake up and find that they are strong.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefa9",
        },
        {
          _id: "5cd96e05de30eff6ebccefab",
          dialog:
            "There are few who can. The language is that of Mordor, which I will not utter here.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefab",
        },
        {
          _id: "5cd96e05de30eff6ebccefc3",
          dialog: "We have just passed into the realm of Gondor.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefc3",
        },
        {
          _id: "5cd96e05de30eff6ebccefc4",
          dialog:
            "Yes the white tree of Gondor. The tree of the King. Lord Denethor however, is not the King. He is a steward only, a caretaker of the throne.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefc4",
        },
        {
          _id: "5cd96e05de30eff6ebccefc5",
          dialog:
            "Now listen carefully. Lord Denethor is Boromir's father. To give him news of his beloved son's death would be most unwise. And do not mention Frodo or the Ring. And say nothing of Aragorn either. In fact, its better if you don't speak at all Peregrin Took.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefc5",
        },
        {
          _id: "5cd96e05de30eff6ebccefc6",
          dialog: "Hail Denethor son of Ecthelion, Lord and Steward of Gondor.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefc6",
        },
        {
          _id: "5cd96e05de30eff6ebccefc8",
          dialog: "Minas Tirith. City of Kings.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefc8",
        },
        {
          _id: "5cd96e05de30eff6ebccefd2",
          dialog:
            "Hmm hmm hmm hmm, Down from the door where it began, hmm hmm hmm hmm",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefd2",
        },
        {
          _id: "5cd96e05de30eff6ebccefd3",
          dialog:
            "And I must follow if I can. The road goes ever on and on, down from the door where it began, now far ahead the road has gone, and I must follow if I can.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefd3",
        },
        {
          _id: "5cd96e05de30eff6ebccefd6",
          dialog: "No word. Nothing.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefd6",
        },
        {
          _id: "5cd96e05de30eff6ebccefd8",
          dialog: "Do we know that?",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefd8",
        },
        {
          _id: "5cd96e05de30eff6ebccefda",
          dialog: "That Frodo is alive. Yes' yes he's alive.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccefda",
        },
        {
          _id: "5cd96e05de30eff6ebccf000",
          dialog: "Let the Ringbearer decide.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf000",
        },
        {
          _id: "5cd96e05de30eff6ebccf002",
          dialog: "Frodo?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf002",
        },
        {
          _id: "5cd96e05de30eff6ebccf004",
          dialog: "So be it.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf004",
        },
        {
          _id: "5cd96e05de30eff6ebccf00d",
          dialog:
            "Shadowfax. He is the lord of all horses and has been my friend through many dangers.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf00d",
        },
        {
          _id: "5cd96e05de30eff6ebccf011",
          dialog:
            "So stop your fretting, Master Dwarf. Merry and Pippin are quite safe. In fact, they are far safer than you are about to be.",
          movie: "5cd95395de30eff6ebccde5b",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf011",
        },
        {
          _id: "5cd96e05de30eff6ebccf012",
          dialog: "In the common tongue it says.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf012",
        },
        {
          _id: "5cd96e05de30eff6ebccf01e",
          dialog: "I come with tidings in this dark hour and with counsel.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf01e",
        },
        {
          _id: "5cd96e05de30eff6ebccf021",
          dialog: "Meriadoc Brandybuck and Peregrin Took! I might have known!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf021",
        },
        {
          _id: "5cd96e05de30eff6ebccf023",
          dialog: "Pippin.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf023",
        },
        {
          _id: "5cd96e05de30eff6ebccf029",
          dialog: "Get up!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf029",
        },
        {
          _id: "5cd96e05de30eff6ebccf02b",
          dialog:
            "Authority is not given to you to deny the return of the King, steward.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf02b",
        },
        {
          _id: "5cd96e05de30eff6ebccf02c",
          dialog: "Come!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf02c",
        },
        {
          _id: "5cd96e05de30eff6ebccf02d",
          dialog:
            "All had turned to vain ambition. He would use even his grief as a cloak! A thousand years this city has stood and now at the whim of a madman it will fall! And the white tree, the tree of the King will never bloom again.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf02d",
        },
        {
          _id: "5cd96e05de30eff6ebccf02f",
          dialog:
            "A wizard is never late! Frodo Baggins. Nor is he early, he arrives precisely when he means to.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf02f",
        },
        {
          _id: "5cd96e05de30eff6ebccf030",
          dialog: "You didn't think I'd miss your Uncle Bilbo's birthday?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf030",
        },
        {
          _id: "5cd96e05de30eff6ebccf031",
          dialog:
            "My lord, there will be a time to grieve for Boromir but it is not now. War is coming. The enemy is on your doorstep. As steward, you are charged with the defence of this city. Where are Gondor's armies? You still have friends. You are not alone in this fight. Send word to Theoden of Rohan. Light the beacons.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf031",
        },
        {
          _id: "5cd96e05de30eff6ebccf033",
          dialog:
            "So how is the old rascal? I hear it is going to be a party of special significance?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf033",
        },
        {
          _id: "5cd96e05de30eff6ebccf036",
          dialog: "Well that should please him.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf036",
        },
        {
          _id: "5cd96e05de30eff6ebccf03d",
          dialog: "What?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf03d",
        },
        {
          _id: "5cd96e05de30eff6ebccf050",
          dialog: "Into the Mines!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf050",
        },
        {
          _id: "5cd96e05de30eff6ebccf051",
          dialog: "Bilbo had a shirt of mithril rings that Thorin gave him.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf051",
        },
        {
          _id: "5cd96e05de30eff6ebccf053",
          dialog:
            "Yes. I never told him, but its worth was greater than the value of The Shire!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf053",
        },
        {
          _id: "5cd96e05de30eff6ebccf055",
          dialog: "I've no memory of this place.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf055",
        },
        {
          _id: "5cd96e05de30eff6ebccf057",
          dialog:
            "We now have but one choice, we must face the long dark of Moria. Be on your guard, there are older and fouler things than orcs in the deep places of the world",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf057",
        },
        {
          _id: "5cd96e05de30eff6ebccf059",
          dialog: "The wealth of Moria is not in gold, or jewels, but Mithril.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf059",
        },
        {
          _id: "5cd96e05de30eff6ebccf06a",
          dialog:
            "Yes, there it lies. This city has dwelt ever in the sight of its shadow.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf06a",
        },
        {
          _id: "5cd96e05de30eff6ebccf06c",
          dialog:
            "This is not the weather of the world. This is a device of Sauron's making. A broil of fume he sends ahead of his host. The Orcs of Mordor have no love of daylight, so he covers the face of the sun to ease their passage along the road to war. When the shadow of Mordor reaches this city it will begin.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf06c",
        },
        {
          _id: "5cd96e05de30eff6ebccf06e",
          dialog:
            "Oh, it's too late for that Peregrin. There's no leaving this city. Help must come to us.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf06e",
        },
        {
          _id: "5cd96e05de30eff6ebccf070",
          dialog:
            "They guard it because they have hope. A faint and fading hope that one day it will flower. That a king will come and this city will be as it once was before it fell into decay. The old wisdom born out of the west was forsaken. Kings made tombs more splendid than the houses of the living and counted the old names of their descent, dearer than the names of their sons. Childless lords sat in aged halls musing on heraldry or in high, cold towers asking questions of the stars. And so the people of Gondor fell into ruin. The line of Kings failed. The white tree withered. The rule of Gondor was given over to lesser men.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf070",
        },
        {
          _id: "5cd96e05de30eff6ebccf073",
          dialog: "Good gracious me!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf073",
        },
        {
          _id: "5cd96e05de30eff6ebccf075",
          dialog: "Indeed?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf075",
        },
        {
          _id: "5cd96e05de30eff6ebccf076",
          dialog:
            "If you're referring to the incident with the dragon, I was barely involved. All I did was give your uncle a little nudge out of the door.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf076",
        },
        {
          _id: "5cd96e05de30eff6ebccf078",
          dialog: "Oh really?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf078",
        },
        {
          _id: "5cd96e05de30eff6ebccf092",
          dialog: "It's Gollum",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf092",
        },
        {
          _id: "5cd96e05de30eff6ebccf095",
          dialog: "He's been following us for three days",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf095",
        },
        {
          _id: "5cd96e05de30eff6ebccf097",
          dialog:
            "Escaped, or was set loose and now the Ring has drawn him here, He won't ever be rid of his need for it. He hates and loves the Ring, as he hates and loves himself. Smeagol's life is a sad story, Yes, he was once called, before the Ring found him. Before it drove him mad",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf097",
        },
        {
          _id: "5cd96e05de30eff6ebccf098",
          dialog:
            "Pity? It was pity that stayed Bilbo's hand. Many that live deserve death and many that die, deserve life. Can you give it to them Frodo? Do not be too eager to deal out death and judgement Even the very wise cannot see all ends. My heart tells me that Gollum has some part to play, yet for good or ill.... before this is over. The pity of Bilbo, may rule the fate of many",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf098",
        },
        {
          _id: "5cd96e05de30eff6ebccf0a4",
          dialog:
            "So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us. There are other forces at work in this world, Frodo, besides the will of evil. Bilbo was meant to find the Ring, in which case you also were meant to have it and that is an encouraging thought. Oh! Its that way",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0a4",
        },
        {
          _id: "5cd96e05de30eff6ebccf0a7",
          dialog: "So am I dear boy. So am I.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0a7",
        },
        {
          _id: "5cd96e05de30eff6ebccf0aa",
          dialog: "And what about very old friends?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0aa",
        },
        {
          _id: "5cd96e05de30eff6ebccf0ad",
          dialog: "Bilbo Baggins.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0ad",
        },
        {
          _id: "5cd96e05de30eff6ebccf0b0",
          dialog:
            "It's good to see you. One hundred and eleven years old who would believe it. You haven't aged a day!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0b0",
        },
        {
          _id: "5cd96e05de30eff6ebccf0b4",
          dialog: "Just tea, thank you.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0b4",
        },
        {
          _id: "5cd96e05de30eff6ebccf0b7",
          dialog: "Owwwh!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0b7",
        },
        {
          _id: "5cd96e05de30eff6ebccf0c7",
          dialog: "Gimli!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0c7",
        },
        {
          _id: "5cd96e05de30eff6ebccf0c9",
          dialog:
            "Here lies Balin, son of Fundin, Lord of Moria. He is dead then. Its as I feared.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0c9",
        },
        {
          _id: "5cd96e05de30eff6ebccf0cb",
          dialog:
            "They have taken the Bridge and the second hall. We have barred the gates, but cannot hold them for long. The ground shakes. Drums, Drums in the deep. We cannot get out. A shadow moves in the dark. We cannot get out. They are coming.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0cb",
        },
        {
          _id: "5cd96e05de30eff6ebccf0cd",
          dialog:
            "Let me risk a little more light, Behold the great realm and dwarf city of Dwarrowdelf.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0cd",
        },
        {
          _id: "5cd96e05de30eff6ebccf0cf",
          dialog:
            "No, but the air doesnt smell so foul down here. If in doubt, Meriadoc, always follow your nose.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0cf",
        },
        {
          _id: "5cd96e05de30eff6ebccf0d0",
          dialog:
            "Fool of a Took! Throw yourself in next time, and rid us of your stupidity!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0d0",
        },
        {
          _id: "5cd96e05de30eff6ebccf0df",
          dialog: "Just tea, thank you.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0df",
        },
        {
          _id: "5cd96e05de30eff6ebccf0e1",
          dialog: "Oh not at all!",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0e1",
        },
        {
          _id: "5cd96e05de30eff6ebccf0e8",
          dialog: "So you mean to go through with your plan then?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0e8",
        },
        {
          _id: "5cd96e05de30eff6ebccf0ea",
          dialog: "You will tell him wont you?",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0ea",
        },
        {
          _id: "5cd96e05de30eff6ebccf0f4",
          dialog: "No.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0f4",
        },
        {
          _id: "5cd96e05de30eff6ebccf0f5",
          dialog: "Frodo suspects something.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0f5",
        },
        {
          _id: "5cd96e05de30eff6ebccf0f6",
          dialog: "Fool of a Took!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0f6",
        },
        {
          _id: "5cd96e05de30eff6ebccf0f7",
          dialog: "Look at me.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0f7",
        },
        {
          _id: "5cd96e05de30eff6ebccf0f8",
          dialog: "Look at me! What did you see?",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0f8",
        },
        {
          _id: "5cd96e05de30eff6ebccf0ff",
          dialog: "Minas Tirith? Is that what you saw?",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf0ff",
        },
        {
          _id: "5cd96e05de30eff6ebccf111",
          dialog: "He's very fond of you.",
          movie: "5cd95395de30eff6ebccde5c",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf111",
        },
        {
          _id: "5cd96e05de30eff6ebccf112",
          dialog: "What did you tell him about Frodo and the Ring?",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf112",
        },
        {
          _id: "5cd96e05de30eff6ebccf113",
          dialog:
            "There was no lie in Pippin's eyes. A fool but an honest fool he remains.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf113",
        },
        {
          _id: "5cd96e05de30eff6ebccf114",
          dialog:
            "He told Sauron nothing of Frodo and the Ring. We've been strangely fortunate. Pippin saw in the Palantir a glimpse of the enemy's plan. Sauron moves to strike the city of Minas Tirith.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf114",
        },
        {
          _id: "5cd96e05de30eff6ebccf115",
          dialog:
            "His defeat at Helm's Deep showed our enemy one thing. He knows the Heir of Elendil has come forth, Men are not as weak as he supposed. There is courage still. Strength enough, perhaps, to challenge him. Sauron fears this. He will not risk the peoples of Middle Earth uniting under one banner. He will raze Minas Tirith to the ground, before he sees a King return to the throne of men. If the beacons of Gondor are lit Rohan must be ready for war.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf115",
        },
        {
          _id: "5cd96e05de30eff6ebccf118",
          dialog: "And what did you tell him? Speak!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf118",
        },
        {
          _id: "5cd96e05de30eff6ebccf11b",
          dialog: "No!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf11b",
        },
        {
          _id: "5cd96e05de30eff6ebccf128",
          dialog:
            "They will be. You must come to Minas Tirith by another road. Follow the river. Look to the black ships. Understand this, things are now in motion that cannot be undone. I ride for Minas Tirith, and I wont be going alone.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf128",
        },
        {
          _id: "5cd96e05de30eff6ebccf12a",
          dialog:
            "Of all the Hobbits, Peregrin Took, you are the worst! Hurry! Hurry!",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf12a",
        },
        {
          _id: "5cd96e05de30eff6ebccf130",
          dialog:
            "Three days ride as the Nazg'l flies. And you'd better hope we don't have one of those on our tail.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf130",
        },
        {
          _id: "5cd96e05de30eff6ebccf13b",
          dialog: "Run, Shadowfax, show us the meaning of haste.",
          movie: "5cd95395de30eff6ebccde5d",
          character: "5cd99d4bde30eff6ebccfea0",
          id: "5cd96e05de30eff6ebccf13b",
        },
      ],
      total: 216,
      limit: 1000,
      offset: 0,
      page: 1,
      pages: 1,
    };
    */
    this.quoteData = data;
    this.processedQuotes = this.processQuotes();
    this.loadTypingTest(data);
  }

  // Function to convert a string to HTML.
  stringToHTML(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body;
  }

  loadTypingTest(data) {
    fetch("typing-test.html")
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw response;
      })
      .then((text) => {
        let html = this.stringToHTML(text);
        let testWrapper = html.querySelector("#typing-test-wrapper");
        let currentHeader = document.getElementById("header");
        let currentMain = document.getElementById("main");
        currentHeader.replaceWith(testWrapper);
        currentMain.remove();
      })
      .then(() => {
        document.getElementById("text-container").innerHTML =
          this.processedQuotes;
      })
      .then(() => {
        const test = new TypingTest(
          document.getElementById("typing-test-wrapper"),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  shuffleArray(array) {
    // Check that the array provided is an array.
    if (Array.isArray(array)) {
      // Fisher-Yates shuffle algorithm [https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/].
      // If array exists, loop through it in reverse.
      for (let i = array.length - 1; i > 0; i--) {
        // Generate random number
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j.
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    return array;
  }

  // Function to wrap text in HTML tags.
  textWrap(prefix, text, suffix) {
    return `${prefix}${text}${suffix}`;
  }

  // Sort quote data into an array of quotes.
  // TODO: only process a certain number of quotes at a time.
  // Add a check to see how many are left, if less than a certain number, fetch a new quote.
  getAllQuotes() {
    const quotes = this.quoteData.docs;
    const allQuotes = [];
    if (quotes.length) {
      quotes.forEach((quote) => {
        allQuotes.push(quote.dialog);
      });
    }

    return allQuotes;
  }

  // Take the new quotes array, shuffle it, and wrap each word in a div element.
  processQuotes() {
    let allQuotes = this.getAllQuotes();
    allQuotes = this.shuffleArray(allQuotes);
    let words = [];
    allQuotes = allQuotes.map((quote) => {
      quote = quote.split(" ");
      quote.map((word) => {
        // Wrap the letters in separate divs before wrapping the word in a div.
        let wrappedLetters = this.processLetters(word);
        // Wrap the returned wrapped letters in a containing 'words' div.
        let wrappedWord = this.textWrap(
          "<div class='word'>",
          wrappedLetters,
          "</div>",
        );
        words.push(wrappedWord);
      });
    });

    // TODO: Add a check to see how many words are left, if less than a certain number, fetch a new quote.
    let first50Words = words.slice(0, 50);
    words = first50Words.join("");
    return words;
  }

  // Take the word and wrap each letter in a div element.
  processLetters(word) {
    let letters = [];
    word = word.split("");
    word.map((letter) => {
      let wrappedLetter = this.textWrap(
        "<div class='letter'>",
        letter,
        "</div>",
      );
      letters.push(wrappedLetter);
    });
    letters = letters.join("");

    return letters;
  }
}
