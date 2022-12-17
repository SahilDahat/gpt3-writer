//https://buildspace.so/p/build-ai-writing-assistant-gpt3/lessons/add-in-your-prompt

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = 
`
Explain to me the story of Naruto in brief and Always start with the story not with the author or maker:

Naruto is a young ninja living in the village of Konoha. He is the only son of the Fourth Hokage, a powerful ninja who sacrificed his life to save the village. Naruto dreams of becoming a Hokage and gaining the respect of the village. He is delinquent and unmotivated, but is determined to prove himself and become a hero.

On his first day as a student of the Ninja Academy, Naruto makes a powerful enemy in Sasuke Uchiha, a gifted ninja from a legendary clan. The two rivals are forced to work together to complete missions, and slowly build a strong friendship. They also form an unbreakable bond with their teammates Sakura Haruno, and Kakashi Hatake, their teacher.

As they progress through their ninja training, they encounter powerful enemies and allies, uncover a dangerous conspiracy, and become involved in a 4-way war between ninja nations. Throughout their journey, Naruto develops his ninja skills and discovers his inner strength, eventually facing off against a powerful force that threatens to destroy the world.

With the help of his friends, Naruto overcomes incredible odds and prevails, becoming the first ninja in history to accomplish the impossible. He is accepted and respected by his village as the Seventh Hokage.


Tell the detailed story of Jujutsu Kaisen.

Jujutsu Kaisen follows the story of Yuji Itadori, an intelligent but unmotivated high school student. One day, Yuji and his friends stumble upon an ancient relic hidden in the school's basement. Not knowing the true power of the relic, they accidentally unleash an evil spirit known as a "curse." This curse quickly spreads throughout the school, turning students and teachers into monsters.

Desperate to save his friends, Yuji makes a deal with the curse, offering himself as a host instead. His selfless act binds the curse to his body, granting him immense power and access to the world of Jujutsu, the art of fighting curses.

Yuji soon discovers that the curse he has become bound to is also a powerful Jujutsu sorcerer known as Sukuna. He must now hone his newfound abilities in order to exorcise Sukuna's twenty fingers scattered throughout Japan. Along the way, he meets powerful allies such as Megumi Fushiguro and Nobara Kugisaki and powerful enemies such as Mahito, the leader of the curse’s army.

As Yuji and his allies travel across Japan, they uncover dark secrets and uncover the mysteries of the cursed world. They soon find themselves in a war with the powerful Jujutsu Sorcerers - a war they must win in order to save the world from destruction.


Tell me the story of Death note without spoilers.

Death Note follows the story of Light Yagami, a brilliant but bored high school student. One day, he discovers a mysterious notebook called the "Death Note" that can kill anyone whose name is written in it. Light soon figures out that the Death Note is from the realm of Shinigami, supernatural creatures that preside over life and death. He takes on the alias of "Kira," a mysterious vigilante killer who uses the Death Note to rid the world of evil.

Light's plan to become a god of justice is complicated by the appearance of a great detective known as "L." L quickly deduces Kira's identity, and a battle of wits ensues between the two. As their battle becomes increasingly intense, Light is forced to take desperate measures to protect his identity.

As Light continues his rampage as Kira, his actions have far-reaching consequences that threaten to spiral out of control. He must make difficult choices to ensure his victory, but in the end, his fate is in the hands of L and the police. Death Note is an intense psychological thriller that follows Light's journey for justice and his struggle between righteousness and evil.


Tell me an anime story with a character named kasukabe named city in the center of the plot.

Kasukabe is the story of high school student, Tsukamoto Tsukushi. Tsukushi moves to the city of Kasukabe, home of the famous Kasukabe Girls' High School, with his family. He is immediately taken with the city and its many attractions.

Tsukushi soon discovers that his new city is not as peaceful as he thought. A mysterious group known as "Kasukabe Defense Corps" is wreaking havoc on the city, and it's up to Tsukushi and his friends to stop them.

Tsukushi and his friends soon realize that the true cause of the chaos lies in the mysterious and magical world of spirits. To save the city, they must first uncover the truth about the city's past and the secrets of the spirit world.

With the help of their newfound allies, Tsukushi and the Kasukabe Defense Corps must battle the forces of darkness and evil to protect the city of Kasukabe. Along the way, Tsukushi must also face his own demons and learn to accept his destiny.
`;

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;