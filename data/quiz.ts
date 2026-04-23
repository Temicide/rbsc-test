import type { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q-kqueue",
    prompt: "เจอคนดังหน้าสแตนด์ คุณทักยังไง?",
    scene: "กล้องเริ่มยก เพื่อนเริ่มสะกิด",
    options: [
      {
        id: "a",
        label: "พุ่งไปไหว้ เปิดด้วยมุกไว ๆ",
        detail: "มั่นใจไว้ก่อน เดี๋ยวจังหวะตามมาเอง",
        scores: { socialBoldness: 3, chaosEnergy: 2, humorStyle: 2, observerInitiator: 2 },
      },
      {
        id: "b",
        label: "ยิ้มทัก แล้วชวนเพื่อนมาด้วย",
        detail: "ขอให้ทั้งแก๊งมีโมเมนต์ร่วมกัน",
        scores: { groupLoyalty: 3, fanEnergy: 2, socialBoldness: 1 },
      },
      {
        id: "c",
        label: "ดูจังหวะก่อน ค่อยเข้าไปสุภาพ ๆ",
        detail: "อ่านอากาศสำคัญพอ ๆ กับอ่านสนาม",
        scores: { observerInitiator: -2, socialBoldness: -1, groupLoyalty: 1, fanEnergy: 1 },
      },
      {
        id: "d",
        label: "ถ่าย reaction เพื่อนก่อน",
        detail: "ตัวจริงยังไม่ทันพูด กรุ๊ปแชตมีเรื่องแล้ว",
        scores: { humorStyle: 3, chaosEnergy: 2, observerInitiator: 1 },
      },
    ],
  },
  {
    id: "q-arrival",
    prompt: "เพื่อนกำลังมาสายทั้งแก๊ง คุณทำไง?",
    scene: "กรุ๊ปแชตเด้งไม่หยุด",
    options: [
      {
        id: "a",
        label: "ตั้งหมุด แล้วสรุปแผนใหม่",
        detail: "ระบบต้องมาก่อนความวุ่น",
        scores: { groupLoyalty: 3, observerInitiator: 2, socialBoldness: 1 },
      },
      {
        id: "b",
        label: "ส่ง voice note ปลุกใจ",
        detail: "ใครหลงก็หลงแบบมีพลัง",
        scores: { socialBoldness: 3, humorStyle: 2, chaosEnergy: 1 },
      },
      {
        id: "c",
        label: "รอเงียบ ๆ ดูทางที่โล่งสุด",
        detail: "ไม่รีบ แต่ข้อมูลครบ",
        scores: { observerInitiator: -2, chaosEnergy: -1, groupLoyalty: 1 },
      },
      {
        id: "d",
        label: "ซื้อเครื่องดื่มรอทุกคน",
        detail: "แก้ปัญหาด้วยความอิ่มและความเย็น",
        scores: { groupLoyalty: 3, fanEnergy: 1, socialBoldness: -1 },
      },
    ],
  },
  {
    id: "q-announcement",
    prompt: "โต๊ะข้าง ๆ คุยดังจนฟังประกาศไม่ออก",
    scene: "เพื่อนหันมาหาคุณทันที",
    options: [
      {
        id: "a",
        label: "ขอเบาเสียงแบบสุภาพ",
        detail: "ใจดีได้ แต่ต้องได้ยินด้วย",
        scores: { socialBoldness: 2, groupLoyalty: 2, observerInitiator: 1 },
      },
      {
        id: "b",
        label: "แปลให้เพื่อนฟังทันที",
        detail: "ไม่ต้องชนะเสียง แค่ชนะความเข้าใจ",
        scores: { groupLoyalty: 2, humorStyle: 1, observerInitiator: -1 },
      },
      {
        id: "c",
        label: "ทำหน้า meme แล้วรอฟังรอบหน้า",
        detail: "สถานการณ์ไม่ชัด แต่มุกชัดมาก",
        scores: { humorStyle: 3, chaosEnergy: 1 },
      },
      {
        id: "d",
        label: "ดูป้ายกับบรรยากาศแทนเสียง",
        detail: "ข้อมูลไม่ได้มีแค่ลำโพง",
        scores: { observerInitiator: -3, chaosEnergy: -1, fanEnergy: 1 },
      },
    ],
  },
  {
    id: "q-new-friend",
    prompt: "มีคนใหม่มานั่งด้วย คุณช่วยยังไง?",
    scene: "บรรยากาศยังเกร็งนิด ๆ",
    options: [
      {
        id: "a",
        label: "ถามเรื่องพีคที่เจอวันนี้",
        detail: "ให้เขามีพื้นที่เล่าก่อน",
        scores: { groupLoyalty: 3, socialBoldness: 1, fanEnergy: 1 },
      },
      {
        id: "b",
        label: "เล่าตำนานโต๊ะสั้น ๆ",
        detail: "มอบ lore ให้พอดี ไม่โยนสารานุกรมใส่หน้า",
        scores: { humorStyle: 2, fanEnergy: 2, groupLoyalty: 1 },
      },
      {
        id: "c",
        label: "ชวนถ่ายรูปหมู่ไว ๆ",
        detail: "ความสนิทเริ่มจากมุมกล้อง",
        scores: { socialBoldness: 2, chaosEnergy: 2, groupLoyalty: 1 },
      },
      {
        id: "d",
        label: "ส่งขนมให้ก่อน ค่อยคุย",
        detail: "มิตรภาพบางทีก็เริ่มจากถุงเล็ก ๆ",
        scores: { groupLoyalty: 3, socialBoldness: -1, fanEnergy: 1 },
      },
    ],
  },
  {
    id: "q-photo",
    prompt: "เพื่อนอยากลงสตอรี่ทั้งที่เพิ่งมาถึง",
    scene: "แสงดี แต่โต๊ะยังโล่ง",
    options: [
      {
        id: "a",
        label: "จัดเฟรมให้ดูมีเรื่อง",
        detail: "คุม mood เหมือน art director ประจำโต๊ะ",
        scores: { observerInitiator: -1, humorStyle: 1, fanEnergy: 2 },
      },
      {
        id: "b",
        label: "เข้าเฟรมด้วยท่าเชียร์",
        detail: "ภาพนิ่งไม่ได้แปลว่าพลังนิ่ง",
        scores: { socialBoldness: 3, chaosEnergy: 2, humorStyle: 1 },
      },
      {
        id: "c",
        label: "คิดแคปชันให้เพื่อน reply",
        detail: "รูปหนึ่งใบต้องมี aftershock ในแชต",
        scores: { humorStyle: 3, fanEnergy: 1 },
      },
      {
        id: "d",
        label: "ถาม mood ที่อยากได้ก่อน",
        detail: "ทำให้ตรงโจทย์ก่อนค่อยกดถ่าย",
        scores: { groupLoyalty: 2, observerInitiator: 1, chaosEnergy: -1 },
      },
    ],
  },
  {
    id: "q-rumor",
    prompt: "โต๊ะข้าง ๆ มีข่าวลือร้อนมาก",
    scene: "ทั้งโต๊ะเริ่มเงียบเอง",
    options: [
      {
        id: "a",
        label: "ฟังเงียบ ๆ แล้วแยก fact",
        detail: "ข่าวลือก็ต้องมีระเบียบข้อมูล",
        scores: { observerInitiator: -3, humorStyle: 1, groupLoyalty: 1 },
      },
      {
        id: "b",
        label: "เตือนเพื่อนอย่าทำหน้าชัด",
        detail: "ศักดิ์ศรีกลุ่มต้องอยู่",
        scores: { groupLoyalty: 3, observerInitiator: 1 },
      },
      {
        id: "c",
        label: "ถามเรื่องอื่นเพื่อกู้ทรง",
        detail: "กู้สถานการณ์ด้วยละครสด",
        scores: { socialBoldness: 2, chaosEnergy: 2, humorStyle: 1 },
      },
      {
        id: "d",
        label: "เก็บ keyword ไว้ทำมุก",
        detail: "หลักฐานต้องหมักก่อนถึงจะอร่อย",
        scores: { humorStyle: 2, observerInitiator: -1, chaosEnergy: 1 },
      },
    ],
  },
  {
    id: "q-favorite",
    prompt: "คนที่คุณเชียร์มีโมเมนต์น่ารักมาก",
    scene: "คุณเห็น แต่เพื่อนยังไม่เห็น",
    options: [
      {
        id: "a",
        label: "เล่าให้เพื่อนฟังทันที",
        detail: "โมเมนต์ดีต้องมีคนรับรู้",
        scores: { fanEnergy: 3, socialBoldness: 1, humorStyle: 1 },
      },
      {
        id: "b",
        label: "รอจังหวะที่เพื่อนพร้อมอิน",
        detail: "ขายของต้องเลือกเวลา",
        scores: { fanEnergy: 2, observerInitiator: -2, groupLoyalty: 1 },
      },
      {
        id: "c",
        label: "ทำป้ายใจให้เพื่อนขำ",
        detail: "ความอินไม่ต้องเงียบเสมอไป",
        scores: { fanEnergy: 2, chaosEnergy: 2, socialBoldness: 2 },
      },
      {
        id: "d",
        label: "ส่งให้คนที่เข้าใจที่สุด",
        detail: "เริ่มจากคนที่รับคลื่นเดียวกัน",
        scores: { groupLoyalty: 2, fanEnergy: 2, socialBoldness: -1 },
      },
    ],
  },
  {
    id: "q-plan-breaks",
    prompt: "แผนพัง ที่เต็ม คิวแน่น คุณทำอะไร?",
    scene: "ทุกคนรอคำว่าเอาไงต่อ",
    options: [
      {
        id: "a",
        label: "แบ่งหน้าที่ทันที",
        detail: "ไม่ใช่หัวหน้า แค่ไม่อยากยืนงง",
        scores: { groupLoyalty: 3, socialBoldness: 2, observerInitiator: 2 },
      },
      {
        id: "b",
        label: "พาเดินหา option ใหม่",
        detail: "แผนพังไม่เป็นไร ภาพรวมต้องไม่พัง",
        scores: { chaosEnergy: 3, socialBoldness: 2, humorStyle: 1 },
      },
      {
        id: "c",
        label: "หามุมสงบก่อน",
        detail: "ความเย็นคือ infrastructure",
        scores: { groupLoyalty: 2, chaosEnergy: -2, observerInitiator: -1 },
      },
      {
        id: "d",
        label: "ทำมุกให้ทุกคนหัวเราะก่อน",
        detail: "ถ้ายังแก้ไม่ได้ อย่างน้อยต้องหัวเราะได้",
        scores: { humorStyle: 3, chaosEnergy: 1, groupLoyalty: 1 },
      },
    ],
  },
  {
    id: "q-afterparty",
    prompt: "จบวันแล้ว เพื่อนถามว่าไปต่อไหม?",
    scene: "ทุกคนเหนื่อยแต่ยังไม่อยากจบ",
    options: [
      {
        id: "a",
        label: "ไปได้ ขอร้านนั่งสบาย",
        detail: "สนุกต่อแบบไม่ทรมานพรุ่งนี้",
        scores: { groupLoyalty: 2, chaosEnergy: -1, observerInitiator: 1 },
      },
      {
        id: "b",
        label: "ไปสิ punchline ยังไม่ครบ",
        detail: "เรื่องเล่าต้องมีองก์สาม",
        scores: { socialBoldness: 2, chaosEnergy: 3, humorStyle: 1 },
      },
      {
        id: "c",
        label: "กลับไปทำ recap ให้กลุ่ม",
        detail: "หลังงานคือช่วงผลิตตำนาน",
        scores: { fanEnergy: 2, humorStyle: 2, observerInitiator: -1 },
      },
      {
        id: "d",
        label: "ถามก่อนว่าใครไหวจริง",
        detail: "ความสัมพันธ์สำคัญกว่า afterparty",
        scores: { groupLoyalty: 3, socialBoldness: -1, fanEnergy: 1 },
      },
    ],
  },
  {
    id: "q-story",
    prompt: "มีคนถามว่าสนามเมื่อวานเป็นยังไง",
    scene: "มีเวลาเล่าแค่หนึ่งนาที",
    options: [
      {
        id: "a",
        label: "เล่าเป็นฉาก ๆ",
        detail: "เรื่องดีต้องมี structure",
        scores: { observerInitiator: -1, humorStyle: 2, fanEnergy: 2 },
      },
      {
        id: "b",
        label: "เปิดด้วยประโยคเด็ด",
        detail: "hook สำคัญกว่าบทนำ",
        scores: { socialBoldness: 2, humorStyle: 3, chaosEnergy: 1 },
      },
      {
        id: "c",
        label: "เล่าว่าเพื่อนแต่ละคนมีบท",
        detail: "สนามสนุกเพราะคนในกลุ่มทำให้สนุก",
        scores: { groupLoyalty: 3, fanEnergy: 1 },
      },
      {
        id: "d",
        label: "เล่า detail แปลก ๆ",
        detail: "คุณภาพอยู่ตรงสิ่งที่หลุดจากเฟรมหลัก",
        scores: { observerInitiator: -3, humorStyle: 1 },
      },
    ],
  },
];
