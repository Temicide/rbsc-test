import type { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q-kqueue",
    prompt: "คุณเจอ คะ - คะ - คิวเวนเจอร์สกี้ !? คุณเดินเข้าไปหาเค้าคุณจะเริ่มทักทายเค้าอย่างไร",
    scene: "จังหวะเจอคนดังหน้าสนาม",
    options: [
      {
        id: "a",
        label: "สวัสดีครับพี่คิว ขอถ่ายรูปหน่อยได้ไหมครับ ผมติดตามพี่มานานแล้ว",
        detail: "เปิดดี มีมารยาท และเข้าหาแบบอบอุ่น",
        scores: { social: 3, passion: 2, presence: 2, influence: 1 },
      },
      {
        id: "b",
        label: "สวัสดีครับพี่คิว ผมพาแฟนผมมารู้จักครับ",
        detail: "พาคนข้าง ๆ เข้าโมเมนต์ด้วย",
        scores: { social: 2, influence: 3, passion: 1, observation: 1 },
      },
      {
        id: "c",
        label: "น้ำอะไรเอ่ย ยืนได้",
        detail: "มุกต้องมาก่อน เดี๋ยวความสนิทตามมา",
        scores: { humor: 3, chaos: 1, social: 1, observation: 1 },
      },
      {
        id: "d",
        label: "เลย์บราซิล แอ แอลา เดสซี่ แอลา ชอบี นุ ไปลี แอ๋ เปรสเซา",
        detail: "เปิดสนามด้วยพลังที่ไม่มีใครคาดเดา",
        scores: { chaos: 3, humor: 2, presence: 2, influence: 1 },
      },
    ],
  },
  {
    id: "q-gate-delay",
    prompt: "ในที่สุดคุณก็ได้มีโอกาสลงวิ่งในสนาม rbsc แต่ดันซวยได้เกตที่มีปัญหาเปิดช้า คุณจะทำอย่างไร",
    scene: "เกตเปิดช้า แต่ใจยังวิ่งอยู่",
    options: [
      {
        id: "a",
        label: "ช่างแล้วไม่เอาที่ 1 แล้วคอนเท้นพอ",
        detail: "แพ้ชนะไม่รู้ แต่เรื่องเล่าต้องมา",
        scores: { humor: 2, chaos: 2, presence: 2, influence: 1 },
      },
      {
        id: "b",
        label: "ไม่ว่ายังไงก็จะต้องเอาที่ 1 ให้ได้",
        detail: "โดนขวางก็ไม่ยอมพับสนาม",
        scores: { drive: 3, passion: 2, presence: 1, influence: 1 },
      },
      {
        id: "c",
        label: "ที่ 1 ไม่เป็นไรพยายามสุดก็พอ",
        detail: "เล่นเต็มที่ แต่ยังอ่านสถานการณ์เป็น",
        scores: { drive: 2, observation: 2, passion: 1, influence: 1 },
      },
      {
        id: "d",
        label: "นโมตัสสะ ภัควะโต",
        detail: "เมื่อทุกอย่างรวน ก็ฝากไว้กับศรัทธา",
        scores: { passion: 3, observation: 2, drive: 1, influence: 1 },
      },
    ],
  },
  {
    id: "q-zerosuka-glasses",
    prompt: "คุณกำลังต่อแถวเข้าบูธลุงวี่ (zerosuka) เลเยอร์ที่คุณชื่นชอบอยู่แล้วดันลืมเอาแว่นมา บ้าเอ้ยทำยังไงดี",
    scene: "คิวก็เดิน แว่นก็หาย",
    options: [
      {
        id: "a",
        label: "ไม่สน เหมาอยู่ดี",
        detail: "ใจมันเลือกแล้ว รายละเอียดค่อยว่ากัน",
        scores: { passion: 3, drive: 2, chaos: 1, presence: 1 },
      },
      {
        id: "b",
        label: "ค้นหาร้านแว่นใกล้ฉันแล้ววิ่งไปซื้อแล้วค่อยกลับมา",
        detail: "แก้ปัญหาไว แล้วกลับมาให้ทันจังหวะ",
        scores: { drive: 3, observation: 2, influence: 1, social: 1 },
      },
      {
        id: "c",
        label: "จริงๆ ผมก็เป็นหนุ่มแว่นน้า ถึงจะไม่ใส่แว่น",
        detail: "เอาตัวรอดด้วยมุกและความเนียน",
        scores: { humor: 3, social: 2, presence: 1, influence: 1 },
      },
      {
        id: "d",
        label: "รอผมซื้อแว่นนะครับลุง เจอกันครั้งหน้า~",
        detail: "ยอมถอยแบบยังรักษาโมเมนต์ไว้",
        scores: { passion: 2, observation: 2, social: 1, drive: 1 },
      },
    ],
  },
  {
    id: "q-sprained-ankle",
    prompt: "มีผู้หญิงคนนึงเท้าแพลง คนคุยของเธอกำลังช่วยให้กำลังใจอยู่ข้างๆ คุณที่เดินผ่านแล้วกำลังไปช่วยจะรู้สึกอย่างไร",
    scene: "กำลังจะช่วย แต่เจอซีนหวานก่อน",
    options: [
      {
        id: "a",
        label: "กูเหงาาาา",
        detail: "ช่วยก็ช่วย แต่หัวใจมีสะดุด",
        scores: { passion: 2, humor: 2, observation: 1, chaos: 1 },
      },
      {
        id: "b",
        label: "กูแสบตาาาาา",
        detail: "อ่านภาพไว แล้วแซวในใจไวกว่า",
        scores: { humor: 2, chaos: 2, observation: 2, presence: 1 },
      },
      {
        id: "c",
        label: "รักกันนานๆ นะครับรอเสพครับ",
        detail: "เปลี่ยนสถานการณ์เป็นคอนเทนต์ให้ทั้งวง",
        scores: { social: 2, passion: 2, influence: 2, humor: 1 },
      },
      {
        id: "d",
        label: "เฉยๆ ครับพี่แฟนอยู่แล้ว",
        detail: "นิ่งไว้ เพราะบทของเราชัดอยู่แล้ว",
        scores: { social: 2, presence: 2, observation: 1, influence: 1 },
      },
    ],
  },
  {
    id: "q-yellow-shirt",
    prompt: "สาวม้าตกน้ำมีพี่เสื้อเหลืองมานั่ง แล้วคุณดันซื้อตั๋วมา 2 ใบพอดีคุณจะทำอย่างไร",
    scene: "ตั๋วอยู่ในมือ สถานการณ์อยู่ตรงหน้า",
    options: [
      {
        id: "a",
        label: "2 รอบนี้พี่ขอหนักๆนะ",
        detail: "ใจสู้และขอวัดกันให้ชัด",
        scores: { drive: 3, chaos: 2, passion: 1, presence: 1 },
      },
      {
        id: "b",
        label: "เบาๆ พอเราไม่ได้ทำเวรทำกรรมอะไรกัน",
        detail: "รู้จังหวะว่าตรงไหนควรผ่อน",
        scores: { observation: 2, influence: 2, social: 1, passion: 1 },
      },
      {
        id: "c",
        label: "ซื้อตั๋วเพิ่มอีก 5 ใบ ครั้งนี้มันอีกยาวนาน",
        detail: "ถ้าจะไป ก็ไปให้สุดทาง",
        scores: { chaos: 3, drive: 2, passion: 2, influence: 1 },
      },
      {
        id: "d",
        label: "เก็บตั๋วไว้ปาพี่คิว แล้วยืนขำรอ",
        detail: "มุกต้องมีพร็อพ และพร็อพต้องพร้อม",
        scores: { humor: 3, chaos: 2, observation: 1, influence: 1 },
      },
    ],
  },
];
