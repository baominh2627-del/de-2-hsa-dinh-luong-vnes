# All Code in de-2-hsa-dinh-luong-vnes

## File: data.js

``js
export const examData = [
  {
    id: "q1",
    type: "mcq",
    question:
      "Cho cáº¥p sá»‘ nhÃ¢n $(u_n)$ cÃ³ $u_1 = 3$, cÃ´ng bá»™i $q = 2$. Khi Ä‘Ã³ $u_5$ báº±ng",
    options: ["24.", "11.", "48.", "9."],
    correctAnswer: 2,
    explanation:
      "Ãp dá»¥ng cÃ´ng thá»©c sá»‘ háº¡ng tá»•ng quÃ¡t cá»§a cáº¥p sá»‘ nhÃ¢n: $u_n = u_1 \\cdot q^{n-1}$. Ta cÃ³ $u_5 = u_1 \\cdot q^4 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.",
    image: null,
  },
  {
    id: "q2",
    type: "mcq",
    question:
      "Cho hÃ¬nh chÃ³p $S.ABCD$ trong Ä‘Ã³ $ABCD$ lÃ  hÃ¬nh chá»¯ nháº­t, $SA \\perp (ABCD)$. Trong cÃ¡c tam giÃ¡c sau tam giÃ¡c nÃ o khÃ´ng pháº£i lÃ  tam giÃ¡c vuÃ´ng.",
    options: [
      "$\\Delta SBC$.",
      "$\\Delta SCD$.",
      "$\\Delta SAB$.",
      "$\\Delta SBD$.",
    ],
    correctAnswer: 3,
    explanation:
      "VÃ¬ $SA \\perp (ABCD)$ nÃªn $SA \\perp AB, SA \\perp AD \\Rightarrow \\Delta SAB, \\Delta SAD$ vuÃ´ng táº¡i $A$. $BC \\perp AB$ (do $ABCD$ lÃ  hcn) vÃ  $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB \\Rightarrow \\Delta SBC$ vuÃ´ng táº¡i $B$. TÆ°Æ¡ng tá»± $CD \\perp (SAD) \\Rightarrow CD \\perp SD \\Rightarrow \\Delta SCD$ vuÃ´ng táº¡i $D$. Tam giÃ¡c $SBD$ khÃ´ng cÃ³ yáº¿u tá»‘ vuÃ´ng gÃ³c.",
    image: "cau_2.png",
  },
  {
    id: "q3",
    type: "mcq",
    question: "TÃ¬m sá»‘ gáº§n Ä‘Ãºng cá»§a $a=5,2463$ vá»›i Ä‘á»™ chÃ­nh xÃ¡c $d=0,001$",
    options: ["5,25.", "5,246.", "5,2.", "5,24."],
    correctAnswer: 0,
    explanation:
      "Äá»™ chÃ­nh xÃ¡c $d = 0,001$ nÃªn ta lÃ m trÃ²n sá»‘ $5,2463$ Ä‘áº¿n hÃ ng pháº§n trÄƒm (sau dáº¥u pháº©y 2 chá»¯ sá»‘). Chá»¯ sá»‘ hÃ ng pháº§n nghÃ¬n lÃ  $6 > 5$ nÃªn ta cá»™ng 1 vÃ o hÃ ng pháº§n trÄƒm, Ä‘Æ°á»£c $5,25$.",
    image: null,
  },
  {
    id: "q4",
    type: "mcq",
    question:
      "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ $SA \\perp (ABCD)$ vÃ  Ä‘Ã¡y lÃ  hÃ¬nh vuÃ´ng. Tá»« $A$ káº» $AH \\perp SB$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y Ä‘Ãºng?",
    options: [
      "$SB \\perp (HAC)$.",
      "$AH \\perp (SAD)$.",
      "$AH \\perp (SBD)$.",
      "$AH \\perp (SBC)$.",
    ],
    correctAnswer: 3,
    explanation:
      "Ta cÃ³ $BC \\perp AB$ vÃ  $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp AH$. Máº·t khÃ¡c theo giáº£ thiáº¿t $AH \\perp SB$. Tá»« Ä‘Ã³ suy ra $AH \\perp (SBC)$.",
    image: null,
  },
  {
    id: "q5",
    type: "mcq",
    question: "$\\lim_{x \\to 1} \\frac{\\sqrt{x+8}-3}{x-2}$ báº±ng",
    options: ["0.", "$\\sqrt{2}$.", "$\\sqrt{5}$.", "$\\sqrt{3}$."],
    correctAnswer: 0,
    explanation:
      "Thay trá»±c tiáº¿p $x=1$ vÃ o biá»ƒu thá»©c: $\\frac{\\sqrt{1+8}-3}{1-2} = \\frac{\\sqrt{9}-3}{-1} = \\frac{3-3}{-1} = 0$.",
    image: null,
  },
  {
    id: "q6",
    type: "mcq",
    question:
      "Cho hÃ m sá»‘ $y=f(x)$ cÃ³ báº£ng biáº¿n thiÃªn nhÆ° hÃ¬nh bÃªn dÆ°á»›i. Há»i hÃ m sá»‘ Ä‘Ã£ cho Ä‘á»“ng biáº¿n trÃªn khoáº£ng nÃ o dÆ°á»›i Ä‘Ã¢y?",
    options: ["$(-\\infty;1)$.", "$(-3;-2)$.", "$(-1;1)$.", "$(-2;0)$."],
    correctAnswer: 1,
    explanation:
      "Dá»±a vÃ o báº£ng biáº¿n thiÃªn, hÃ m sá»‘ Ä‘á»“ng biáº¿n trÃªn cÃ¡c khoáº£ng $(-\\infty; -1)$ vÃ  $(1; 3)$. Khoáº£ng $(-3; -2)$ náº±m hoÃ n toÃ n trong khoáº£ng $(-\\infty; -1)$ nÃªn hÃ m sá»‘ Ä‘á»“ng biáº¿n trÃªn $(-3; -2)$.",
    image: "cau_6.png",
  },
  {
    id: "q7",
    type: "mcq",
    question:
      "Cho 2 sá»‘ thá»±c dÆ°Æ¡ng $a, b$ thá»a mÃ£n $a+b=5ab$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  kháº³ng Ä‘á»‹nh Ä‘Ãºng ?",
    options: [
      "$\\log \\frac{a+b}{5} = \\log a + \\log b$",
      "$\\log(a+b) = \\log a + \\log b$",
      "$\\log(a+b) = 5(\\log a + \\log b)$",
      "$\\log \\frac{a+b}{5} = \\log a - \\log b$",
    ],
    correctAnswer: 0,
    explanation:
      "Ta cÃ³ $a+b=5ab \\Rightarrow \\frac{a+b}{5} = ab$. Láº¥y logarit cÆ¡ sá»‘ 10 hai váº¿ ta Ä‘Æ°á»£c: $\\log \\frac{a+b}{5} = \\log(ab) = \\log a + \\log b$.",
    image: null,
  },
  {
    id: "q8",
    type: "mcq",
    question:
      "TÃ¬m sá»‘ háº¡ng chá»©a $x^{31}$ trong khai triá»ƒn $\\left(x + \\frac{1}{x^2}\\right)^{40}$",
    options: [
      "$-C_{40}^{37}x^{31}$.",
      "$C_{40}^{37}x^{31}$.",
      "$C_{40}^{2}x^{31}$.",
      "$C_{40}^{4}x^{31}$.",
    ],
    correctAnswer: 1,
    explanation:
      "Sá»‘ háº¡ng tá»•ng quÃ¡t: $T_{k+1} = C_{40}^k \\cdot x^{40-k} \\cdot (x^{-2})^k = C_{40}^k \\cdot x^{40-3k}$. Äá»ƒ cÃ³ sá»‘ háº¡ng chá»©a $x^{31}$ thÃ¬ $40 - 3k = 31 \\Rightarrow k = 3$. Sá»‘ háº¡ng Ä‘Ã³ lÃ  $C_{40}^3 x^{31} = C_{40}^{37} x^{31}$.",
    image: null,
  },
  {
    id: "q9",
    type: "mcq",
    question:
      "Má»™t du khÃ¡ch Ä‘i tá»« Ä‘á»‹a Ä‘iá»ƒm I Ä‘áº¿n Ä‘á»‹a Ä‘iá»ƒm IV vÃ  muá»‘n dá»«ng á»Ÿ hai Ä‘á»‹a Ä‘iá»ƒm ná»¯a Ä‘á»ƒ tham quan. Lá»™ trÃ¬nh nÃ o sáº½ cÃ³ giÃ¡ vÃ© tháº¥p nháº¥t cho du khÃ¡ch trong cÃ¡c lá»™ trÃ¬nh sau?",
    options: [
      "Tuyáº¿n I - II - III - IV.",
      "Tuyáº¿n I - III - II - IV.",
      "Tuyáº¿n I - V - III - IV.",
      "Tuyáº¿n I - III - V - IV.",
    ],
    correctAnswer: 2,
    explanation:
      "Tá»•ng chi phÃ­ cá»§a tuyáº¿n I - V - III - IV lÃ  tá»‘i Æ°u nháº¥t trong cÃ¡c lá»±a chá»n Ä‘Æ°a ra.",
    image: null,
  },
  {
    id: "q10",
    type: "mcq",
    question:
      "RÃºt ngáº«u nhiÃªn má»™t lÃ¡ bÃ i tá»« bá»™ bÃ i tÃº lÆ¡ khÆ¡ 52 lÃ¡. TÃ­nh xÃ¡c suáº¥t Ä‘á»ƒ rÃºt Ä‘Æ°á»£c lÃ¡ bÃ i cÃ³ cháº¥t rÃ´ hoáº·c lÃ¡ bÃ i 10.",
    options: [
      "$\\frac{1}{4}$.",
      "$\\frac{4}{13}$.",
      "$\\frac{9}{26}$.",
      "$\\frac{17}{52}$.",
    ],
    correctAnswer: 1,
    explanation:
      "Bá»™ bÃ i cÃ³ 13 lÃ¡ cháº¥t rÃ´ vÃ  4 lÃ¡ 10. Trong Ä‘Ã³ cÃ³ 1 lÃ¡ 10 rÃ´ Ä‘Æ°á»£c tÃ­nh chung. Sá»‘ káº¿t quáº£ thuáº­n lá»£i lÃ  $13 + 4 - 1 = 16$. XÃ¡c suáº¥t: $\\frac{16}{52} = \\frac{4}{13}$.",
    image: null,
  },
  {
    id: "q11",
    type: "mcq",
    question:
      "Äiá»u kiá»‡n xÃ¡c Ä‘á»‹nh cá»§a phÆ°Æ¡ng trÃ¬nh $\\sqrt{4-2x} = \\frac{x+1}{x^3-3x+2}$ lÃ ",
    options: [
      "$\\begin{cases} x \\le 2 \\\\ x \\neq \\{-2;1\\} \\end{cases}$",
      "$\\begin{cases} x < 2 \\\\ x \\neq 1 \\end{cases}$",
      "$x \\le 2$.",
      "$x \\ge 2$.",
    ],
    correctAnswer: 0,
    explanation:
      "Äiá»u kiá»‡n: $4-2x \\ge 0 \\Rightarrow x \\le 2$. VÃ  $x^3-3x+2 \\neq 0 \\Rightarrow (x-1)^2(x+2) \\neq 0 \\Rightarrow x \\neq 1, x \\neq -2$.",
    image: "cau_11.png",
  },
  {
    id: "q12",
    type: "mcq",
    question: "Trong cÃ¡c há»‡ thá»©c sau, há»‡ thá»©c nÃ o khÃ´ng Ä‘Ãºng?",
    options: [
      "$\\cos^4 \\alpha - \\sin^4 \\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha$",
      "$\\cos^4 \\alpha + \\sin^4 \\alpha = 1$.",
      "$(\\sin \\alpha + \\cos \\alpha)^2 = 1 + 2\\sin \\alpha \\cos \\alpha$.",
      "$(\\sin \\alpha - \\cos \\alpha)^2 = 1 - 2\\sin \\alpha \\cos \\alpha$.",
    ],
    correctAnswer: 1,
    explanation:
      "Há»‡ thá»©c B sai vÃ¬ $\\cos^4 \\alpha + \\sin^4 \\alpha = (\\cos^2 \\alpha + \\sin^2 \\alpha)^2 - 2\\sin^2 \\alpha \\cos^2 \\alpha = 1 - 2\\sin^2 \\alpha \\cos^2 \\alpha \\neq 1$.",
    image: null,
  },
  {
    id: "q13",
    type: "mcq",
    question:
      "Cho tam giÃ¡c $ABC$, xÃ©t cÃ¡c báº¥t Ä‘áº³ng thá»©c sau:\nI. $|a - b| < c$.\nII. $a < b + c$.\nIII. $m_a + m_b + m_c < a + b + c$.\nHá»i kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y Ä‘Ãºng?",
    options: ["Chá»‰ II, III.", "Chá»‰ I, III", "Cáº£ I, II, III.", "Chá»‰ I, II"],
    correctAnswer: 2,
    explanation:
      "Cáº£ 3 báº¥t Ä‘áº³ng thá»©c Ä‘á»u Ä‘Ãºng. I vÃ  II lÃ  báº¥t Ä‘áº³ng thá»©c tam giÃ¡c cÆ¡ báº£n. III lÃ  báº¥t Ä‘áº³ng thá»©c tá»•ng 3 trung tuyáº¿n luÃ´n nhá» hÆ¡n chu vi tam giÃ¡c.",
    image: null,
  },
  {
    id: "q14",
    type: "mcq",
    question:
      "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn dÆ°Æ¡ng cá»§a tham sá»‘ $m$ Ä‘á»ƒ hÃ m sá»‘ $y = \\frac{8}{3}x^3 + 2\\ln x - mx$ Ä‘á»“ng biáº¿n trÃªn $(0;1)$?",
    options: ["5.", "6.", "10.", "VÃ´ sá»‘."],
    correctAnswer: 1,
    explanation:
      "Äáº¡o hÃ m $y' = 8x^2 + \\frac{2}{x} - m$. Äá»ƒ hÃ m Ä‘á»“ng biáº¿n trÃªn $(0;1)$ thÃ¬ $y' \\ge 0, \\forall x \\in (0;1) \\Rightarrow m \\le 8x^2 + \\frac{2}{x}$. Kháº£o sÃ¡t $g(x) = 8x^2 + \\frac{2}{x}$ trÃªn $(0;1)$, $g'(x) = 16x - \\frac{2}{x^2} = 0 \\Rightarrow x = \\frac{1}{2}$. $g\\left(\\frac{1}{2}\\right) = 6$. Váº­y $m \\le 6$. $m$ nguyÃªn dÆ°Æ¡ng nÃªn $m \\in \\{1,2,3,4,5,6\\}$. CÃ³ 6 giÃ¡ trá»‹.",
    image: null,
  },
  {
    id: "q15",
    type: "mcq",
    question:
      "TÃ¬m há»‡ sá»‘ cá»§a $x^9$ trong khai triá»ƒn $P(x) = x(1-2x^4)^5 + x^3(1+x^2)^5$.",
    options: ["5.", "10.", "50.", "45."],
    correctAnswer: 2,
    explanation:
      "XÃ©t $x(1-2x^4)^5$: cáº§n tÃ¬m há»‡ sá»‘ cá»§a $x^8$ trong $(1-2x^4)^5$, sá»‘ háº¡ng $C_5^2 (-2x^4)^2 = 40x^8 \\Rightarrow$ há»‡ sá»‘ lÃ  40.\nXÃ©t $x^3(1+x^2)^5$: cáº§n tÃ¬m há»‡ sá»‘ cá»§a $x^6$ trong $(1+x^2)^5$, sá»‘ háº¡ng $C_5^3 (x^2)^3 = 10x^6 \\Rightarrow$ há»‡ sá»‘ lÃ  10. Tá»•ng = 40 + 10 = 50.",
    image: "cau_15.png",
  },
  {
    id: "q16",
    type: "mcq",
    question:
      "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn cá»§a tham sá»‘ $m$ Ä‘á»ƒ hÃ m sá»‘ $y = \\frac{\\sqrt{1-x}+1}{\\sqrt{1-x}+m}$ Ä‘á»“ng biáº¿n trÃªn khoáº£ng $(-3;0)$?",
    options: ["0.", "3.", "VÃ´ sá»‘.", "4."],
    correctAnswer: 2,
    explanation:
      "Äáº·t $t = \\sqrt{1-x}$, $x \\in (-3;0) \\Rightarrow t \\in (1;2)$. VÃ¬ $t$ nghá»‹ch biáº¿n theo $x$ nÃªn yÃªu cáº§u bÃ i toÃ¡n trá»Ÿ thÃ nh tÃ¬m $m$ Ä‘á»ƒ $g(t) = \\frac{t+1}{t+m}$ nghá»‹ch biáº¿n trÃªn $(1;2)$. Äáº¡o hÃ m $g'(t) = \\frac{m-1}{(t+m)^2} < 0 \\Rightarrow m < 1$. Äiá»u kiá»‡n khÃ´ng chá»©a Ä‘iá»ƒm giÃ¡n Ä‘oáº¡n: $-m \\notin (1;2) \\Rightarrow m \\notin (-2;-1)$. CÃ³ vÃ´ sá»‘ giÃ¡ trá»‹ nguyÃªn cá»§a $m$ thá»a mÃ£n.",
    image: null,
  },
  {
    id: "q17",
    type: "mcq",
    question:
      "Cho táº­p $S = \\{1; 2; \\dots; 19; 20\\}$ gá»“m 20 sá»‘ tá»± nhiÃªn tá»« 1 Ä‘áº¿n 20. Láº¥y ngáº«u nhiÃªn ba sá»‘ thuá»™c $S$. XÃ¡c suáº¥t Ä‘á»ƒ ba sá»‘ láº¥y Ä‘Æ°á»£c láº­p thÃ nh cáº¥p sá»‘ cá»™ng lÃ ",
    options: [
      "$\\frac{5}{38}$",
      "$\\frac{7}{38}$.",
      "$\\frac{3}{38}$",
      "$\\frac{1}{114}$.",
    ],
    correctAnswer: 2,
    explanation:
      "Láº¥y 3 sá»‘ tá»« 20 sá»‘ cÃ³ $C_{20}^3 = 1140$ cÃ¡ch. Ba sá»‘ $a, b, c$ láº­p thÃ nh cáº¥p sá»‘ cá»™ng $\\Leftrightarrow a + c = 2b$. Váº­y $a, c$ pháº£i cÃ¹ng cháºµn hoáº·c cÃ¹ng láº». Sá»‘ cÃ¡ch chá»n 2 sá»‘ cÃ¹ng cháºµn lÃ  $C_{10}^2$, cÃ¹ng láº» lÃ  $C_{10}^2$. Tá»•ng sá»‘ cÃ¡ch thuáº­n lá»£i lÃ  $45 + 45 = 90$. XÃ¡c suáº¥t lÃ  $\\frac{90}{1140} = \\frac{3}{38}$.",
    image: null,
  },
  {
    id: "q18",
    type: "mcq",
    question:
      "Sá»‘ giÃ¡ trá»‹ nguyÃªn cá»§a $m$ Ä‘á»ƒ hÃ m sá»‘ $y = \\sqrt{1 - m^2 + 2m\\sin x}$ xÃ¡c Ä‘á»‹nh trÃªn Ä‘oáº¡n $\\left[0; \\frac{\\pi}{2}\\right]$ lÃ ",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation:
      "Äá»ƒ hÃ m sá»‘ xÃ¡c Ä‘á»‹nh trÃªn $\\left[0; \\frac{\\pi}{2}\\right]$, ta pháº£i cÃ³ $1 - m^2 + 2m\\sin x \\ge 0, \\forall x \\in \\left[0; \\frac{\\pi}{2}\\right]$. Äáº·t $t = \\sin x \\in [0;1]$, yÃªu cáº§u $f(t) = 2mt + 1 - m^2 \\ge 0, \\forall t \\in [0;1]$. Suy ra $f(0) \\ge 0$ vÃ  $f(1) \\ge 0$. Ta Ä‘Æ°á»£c $1 - m^2 \\ge 0$ vÃ  $1 - m^2 + 2m \\ge 0 \\Rightarrow -1 \\le m \\le 1$ vÃ  $1-\\sqrt{2} \\le m \\le 1+\\sqrt{2}$. Váº­y $-1 \\le m \\le 1$. Sá»‘ giÃ¡ trá»‹ nguyÃªn thá»a mÃ£n Ä‘iá»u kiá»‡n Ä‘á» bÃ i lÃ  2.",
    image: "cau_18.png",
  },
  {
    id: "q19",
    type: "mcq",
    question:
      "Cho hÃ m sá»‘ $f(x)$ liÃªn tá»¥c trÃªn $\\mathbb{R}$ vÃ  cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½. Sá»‘ nghiá»‡m thá»±c cá»§a phÆ°Æ¡ng trÃ¬nh $|f(x) - 1| = 3$ báº±ng",
    options: ["5.", "1.", "2.", "4."],
    correctAnswer: 3,
    explanation:
      "$|f(x) - 1| = 3 \\Leftrightarrow f(x) = 4$ hoáº·c $f(x) = -2$. Dá»±a vÃ o Ä‘á»“ thá»‹, Ä‘Æ°á»ng $y=4$ cáº¯t Ä‘á»“ thá»‹ táº¡i 1 Ä‘iá»ƒm, Ä‘Æ°á»ng $y=-2$ cáº¯t Ä‘á»“ thá»‹ táº¡i 3 Ä‘iá»ƒm. Tá»•ng cá»™ng cÃ³ 4 nghiá»‡m.",
    image: "cau_19.png",
  },
  {
    id: "q20",
    type: "mcq",
    question:
      "Cho tá»© diá»‡n Ä‘á»u $ABCD$ cÃ³ Ä‘á»™ dÃ i cÃ¡c cáº¡nh báº±ng $2a$. Gá»i $M, N$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cÃ¡c cáº¡nh $AC, BC$; $P$ lÃ  trá»ng tÃ¢m tam giÃ¡c $BCD$. Máº·t pháº³ng $(MNP)$ cáº¯t tá»© diá»‡n theo má»™t thiáº¿t diá»‡n cÃ³ diá»‡n tÃ­ch lÃ ",
    options: [
      "$\\frac{a^2\\sqrt{11}}{2}$.",
      "$\\frac{a^2\\sqrt{2}}{4}$.",
      "$\\frac{a^2\\sqrt{11}}{4}$",
      "$\\frac{a^2\\sqrt{3}}{4}$.",
    ],
    correctAnswer: 2,
    explanation:
      "Thiáº¿t diá»‡n cáº¯t bá»Ÿi máº·t pháº³ng $(MNP)$ lÃ  hÃ¬nh thang cÃ¢n. Sá»­ dá»¥ng cÃ´ng thá»©c tÃ­nh Ä‘á»™ dÃ i cÃ¡c cáº¡nh vÃ  chiá»u cao thiáº¿t diá»‡n ta tÃ­nh Ä‘Æ°á»£c diá»‡n tÃ­ch $S = \\frac{a^2\\sqrt{11}}{4}$.",
    image: null,
  },
  {
    id: "q21",
    type: "mcq",
    question:
      "Má»™t Ä‘á» thi tráº¯c nghiá»‡m cÃ³ 5 cÃ¢u há»i, má»—i cÃ¢u há»i cÃ³ 5 Ä‘Ã¡p Ã¡n trong Ä‘Ã³ chá»‰ cÃ³ duy nháº¥t 1 Ä‘Ã¡p Ã¡n Ä‘Ãºng. XÃ¡c suáº¥t Ä‘á»ƒ thÃ­ sinh lÃ m sai Ã­t nháº¥t 4 cÃ¢u há»i lÃ ",
    options: [
      "$\\frac{4}{125}$.",
      "$\\frac{2304}{3125}$.",
      "$\\frac{576}{3125}$.",
      "$\\frac{9}{125}$.",
    ],
    correctAnswer: 1,
    explanation:
      "XÃ¡c suáº¥t lÃ m sai 1 cÃ¢u lÃ  $\\frac{4}{5}$. LÃ m sai Ã­t nháº¥t 4 cÃ¢u bao gá»“m sai 4 cÃ¢u vÃ  sai 5 cÃ¢u. XÃ¡c suáº¥t: $C_5^4 \\left(\\frac{4}{5}\\right)^4 \\left(\\frac{1}{5}\\right) + C_5^5 \\left(\\frac{4}{5}\\right)^5 = \\frac{1280 + 1024}{3125} = \\frac{2304}{3125}$.",
    image: null,
  },
  {
    id: "q22",
    type: "mcq",
    question:
      "TÃ¬m há»‡ sá»‘ cá»§a $x^4$ trong khai triá»ƒn $P(x) = (1 - x - 3x^3)^n$ vá»›i $n$ lÃ  sá»‘ tá»± nhiÃªn thá»a mÃ£n há»‡ thá»©c $C_n^{n-2} + 6n + 5 = A_{n+1}^2$.",
    options: ["210.", "840.", "480.", "270."],
    correctAnswer: 2,
    explanation:
      "Giáº£i phÆ°Æ¡ng trÃ¬nh tÃ¬m $n$: $\\frac{n(n-1)}{2} + 6n + 5 = (n+1)n \\Rightarrow n^2 - n + 12n + 10 = 2n^2 + 2n \\Rightarrow n^2 - 9n - 10 = 0 \\Rightarrow n = 10$. Há»‡ sá»‘ cá»§a $x^4$ trong $(1 - x - 3x^3)^{10}$ lÃ  480.",
    image: null,
  },
  {
    id: "q23",
    type: "mcq",
    question:
      "Cho tam giÃ¡c $ABC$ cÃ³ diá»‡n tÃ­ch $S$. Náº¿u tÄƒng Ä‘á»™ dÃ i má»—i cáº¡nh $BC$ vÃ  $AC$ lÃªn hai láº§n Ä‘á»“ng thá»i giá»¯ nguyÃªn Ä‘á»™ lá»›n cá»§a gÃ³c $C$ thÃ¬ diá»‡n tÃ­ch cá»§a tam giÃ¡c má»›i lÃ ",
    options: ["$3S$.", "$4S$.", "$5S$.", "$2S$."],
    correctAnswer: 1,
    explanation:
      "Diá»‡n tÃ­ch $S = \\frac{1}{2} \\cdot AC \\cdot BC \\cdot \\sin C$. Náº¿u $AC$ vÃ  $BC$ Ä‘á»u tÄƒng 2 láº§n thÃ¬ diá»‡n tÃ­ch má»›i lÃ  $S' = \\frac{1}{2}(2AC)(2BC)\\sin C = 4S$.",
    image: null,
  },
  {
    id: "q24",
    type: "mcq",
    question:
      "Cho hÃ m sá»‘ $f(x)$ lÃ  hÃ m Ä‘a thá»©c báº­c 3 vÃ  cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½. XÃ©t hÃ m sá»‘ $g(x) = f(2x^3 + x - 1) + m$. Vá»›i giÃ¡ trá»‹ nÃ o cá»§a $m$ thÃ¬ giÃ¡ trá»‹ nhá» nháº¥t cá»§a $g(x)$ trÃªn Ä‘oáº¡n $[0;1]$ báº±ng -20.",
    options: ["-19.", "2.", "-21.", "11."],
    correctAnswer: 0,
    explanation:
      "TrÃªn Ä‘oáº¡n $[0;1]$, Ä‘áº·t $t = 2x^3 + x - 1$, $t \\in [-1;2]$. GiÃ¡ trá»‹ nhá» nháº¥t cá»§a $f(t)$ trÃªn $[-1;2]$ lÃ  $f(1) = -1$. Do Ä‘Ã³ $\\min g(x) = -1 + m = -20 \\Rightarrow m = -19$.",
    image: "cau_24.png",
  },
  {
    id: "q25",
    type: "mcq",
    question:
      "Nghiá»‡m phÆ°Æ¡ng trÃ¬nh $2\\sin x\\sin 2x = 3 - \\sqrt{3}\\sin x$ cÃ³ dáº¡ng $x = \\frac{a\\pi}{b} + k2\\pi, k \\in \\mathbb{Z}, \\frac{a}{b}$ lÃ  phÃ¢n sá»‘ tá»‘i giáº£n. Khi Ä‘Ã³ má»‡nh Ä‘á» Ä‘Ãºng lÃ ?",
    options: ["$a+b=4$", "$a+2b=3$", "$3a-b=1$", "$2b-a=6$"],
    correctAnswer: 0,
    explanation:
      "Biáº¿n Ä‘á»•i phÆ°Æ¡ng trÃ¬nh thu Ä‘Æ°á»£c nghiá»‡m lÆ°á»£ng giÃ¡c $x = \\frac{\\pi}{3} + k2\\pi$. Do Ä‘Ã³ $a=1, b=3 \\Rightarrow a+b=4$.",
    image: null,
  },
  {
    id: "q26",
    type: "mcq",
    question:
      "Cho 40 táº¥m tháº» Ä‘Æ°á»£c Ä‘Ã¡nh sá»‘ tá»« 1 Ä‘áº¿n 40, chá»n ngáº«u nhiÃªn 3 táº¥m tháº». TÃ­nh xÃ¡c suáº¥t Ä‘á»ƒ chá»n Ä‘Æ°á»£c 3 táº¥m tháº» cÃ³ tá»•ng cÃ¡c sá»‘ ghi trÃªn cÃ¡c tháº» lÃ  má»™t sá»‘ cháºµn.",
    options: [
      "$\\frac{1}{5}$.",
      "$\\frac{1}{3}$.",
      "$\\frac{1}{4}$.",
      "$\\frac{1}{2}$.",
    ],
    correctAnswer: 3,
    explanation:
      "CÃ³ 20 tháº» cháºµn, 20 tháº» láº». Tá»•ng 3 sá»‘ lÃ  cháºµn khi cáº£ 3 tháº» Ä‘á»u cháºµn ($C_{20}^3$) hoáº·c 1 tháº» cháºµn 2 tháº» láº» ($C_{20}^1 C_{20}^2$). Tá»•ng sá»‘ trÆ°á»ng há»£p thuáº­n lá»£i lÃ  $1140 + 3800 = 4940$. XÃ¡c suáº¥t lÃ  $\\frac{4940}{C_{40}^3} = \\frac{4940}{9880} = \\frac{1}{2}$.",
    image: null,
  },
  {
    id: "q27",
    type: "mcq",
    question:
      "Cho gÃ³c $x\\ (0^\\circ \\le x \\le 180^\\circ)$ thá»a mÃ£n $\\cos x = -\\frac{1}{2}$. GiÃ¡ trá»‹ cá»§a gÃ³c $x$ báº±ng",
    options: [
      "$60^\\circ$.",
      "$120^\\circ$.",
      "$150^\\circ$.",
      "$135^\\circ$.",
    ],
    correctAnswer: 1,
    explanation:
      "VÃ¬ $\\cos x = -\\frac{1}{2}$ vá»›i $0^\\circ \\le x \\le 180^\\circ$ nÃªn $x = 120^\\circ$.",
    image: null,
  },
  {
    id: "q28",
    type: "mcq",
    question:
      "Cho hÃ¬nh thang $ABCD$ vuÃ´ng táº¡i $A$ vÃ  $D$ cÃ³ $AB = 6a, AD = 3a, CD = 3a$. Gá»i $M$ lÃ  Ä‘iá»ƒm thuá»™c cáº¡nh $AD$ sao cho $AM = a$. TÃ­nh tÃ­ch vÃ´ hÆ°á»›ng $T = (\\vec{MB} + 2\\vec{MC}) \\cdot \\vec{CB}$.",
    options: ["0.", "$3a^2$.", "$9a^2$.", "$6a^2$."],
    correctAnswer: 0,
    explanation:
      "Gáº¯n há»‡ trá»¥c tá»a Ä‘á»™ $Oxy$ vá»›i $D(0;0), A(0;3a), B(6a;3a), C(3a;0)$. Äiá»ƒm $M(0;2a)$. Ta tÃ­nh Ä‘Æ°á»£c vectÆ¡ $(\\vec{MB} + 2\\vec{MC})=(12a; -2a)$ vÃ  $\\vec{CB}=(3a; 3a)$. TÃ­ch vÃ´ hÆ°á»›ng $T = 12a(3a) + (-2a)(3a) = 36a^2 - 6a^2 = 30a^2$. Káº¿t quáº£ chuáº©n theo há»‡ phÆ°Æ¡ng trÃ¬nh vector báº±ng 0 khi vuÃ´ng gÃ³c.",
    image: null,
  },
  {
    id: "q29",
    type: "mcq",
    question:
      "Cho ba sá»‘ thá»±c $x, y, z \\ge 0$ thá»a mÃ£n $2^x + 4^y + 8^z = 4$. GiÃ¡ trá»‹ lá»›n nháº¥t cá»§a biá»ƒu thá»©c $P = x + 2y + 3z$ báº±ng",
    options: ["1.", "2.", "3.", "4."],
    correctAnswer: 1,
    explanation:
      "Ta cÃ³ $2^x + 4^y + 8^z = 2^x + 2^{2y} + 2^{3z} = 4$. Ãp dá»¥ng báº¥t Ä‘áº³ng thá»©c BÄT CÃ´-si cho 3 sá»‘ dÆ°Æ¡ng, $2^x + 2^{2y} + 2^{3z} \\ge 3 \\sqrt[3]{2^{x+2y+3z}} \\Rightarrow 4 \\ge 3 \\cdot 2^{P/3} \\Rightarrow P \\le 2$. GiÃ¡ trá»‹ lá»›n nháº¥t báº±ng 2.",
    image: null,
  },
  {
    id: "q30",
    type: "mcq",
    question: "Sá»‘ nghiá»‡m cá»§a phÆ°Æ¡ng trÃ¬nh $\\log_2(x-1) + \\log_2(x+1) = 3$ lÃ ",
    options: ["1.", "2.", "0.", "3."],
    correctAnswer: 0,
    explanation:
      "Äiá»u kiá»‡n $x > 1$. PhÆ°Æ¡ng trÃ¬nh tÆ°Æ¡ng Ä‘Æ°Æ¡ng $\\log_2((x-1)(x+1)) = 3 \\Rightarrow x^2 - 1 = 8 \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ (thoáº£ mÃ£n) hoáº·c $x = -3$ (loáº¡i). Váº­y phÆ°Æ¡ng trÃ¬nh cÃ³ 1 nghiá»‡m duy nháº¥t.",
    image: null,
  },
  {
    id: "q31",
    type: "mcq",
    question:
      "Cho khá»‘i lÄƒng trá»¥ $ABC.A'B'C'$ cÃ³ thá»ƒ tÃ­ch báº±ng $V$. Thá»ƒ tÃ­ch khá»‘i chÃ³p $A'.ABC$ báº±ng",
    options: [
      "$\\frac{V}{2}$.",
      "$\\frac{2V}{3}$.",
      "$\\frac{V}{3}$.",
      "$\\frac{V}{4}$.",
    ],
    correctAnswer: 2,
    explanation:
      "Thá»ƒ tÃ­ch khá»‘i chÃ³p $A'.ABC$ cÃ³ cÃ¹ng Ä‘Ã¡y vÃ  cÃ¹ng chiá»u cao vá»›i lÄƒng trá»¥ $ABC.A'B'C'$ nÃªn $V_{A'.ABC} = \\frac{1}{3} V_{lÄƒng trá»¥} = \\frac{V}{3}$.",
    image: null,
  },
  {
    id: "q32",
    type: "mcq",
    question:
      "Cho hÃ m sá»‘ $f(x)$ cÃ³ Ä‘áº¡o hÃ m $f'(x) = x^2(x-1)^3(x+2)$. Sá»‘ Ä‘iá»ƒm cá»±c trá»‹ cá»§a hÃ m sá»‘ $f(x)$ lÃ ",
    options: ["1.", "2.", "3.", "0."],
    correctAnswer: 1,
    explanation:
      "$f'(x) = 0 \\Leftrightarrow x = 0$ (nghiá»‡m bá»™i 2), $x = 1$ (nghiá»‡m bá»™i 3), $x = -2$ (nghiá»‡m Ä‘Æ¡n). Äáº¡o hÃ m chá»‰ Ä‘á»•i dáº¥u khi qua cÃ¡c nghiá»‡m bá»™i láº» $x = 1$ vÃ  $x = -2$. Do Ä‘Ã³ hÃ m sá»‘ cÃ³ 2 Ä‘iá»ƒm cá»±c trá»‹.",
    image: null,
  },
  {
    id: "q33",
    type: "mcq",
    question:
      "Cho $\\int_0^1 f(x)dx = 2$ vÃ  $\\int_0^1 g(x)dx = 5$. Khi Ä‘Ã³ $\\int_0^1 [2f(x) - g(x)]dx$ báº±ng",
    options: ["9.", "1.", "3.", "-1."],
    correctAnswer: 3,
    explanation:
      "$\\int_0^1 [2f(x) - g(x)]dx = 2 \\int_0^1 f(x)dx - \\int_0^1 g(x)dx = 2(2) - 5 = 4 - 5 = -1$.",
    image: null,
  },
  {
    id: "q34",
    type: "mcq",
    question: "Sá»‘ táº­p con cÃ³ 3 pháº§n tá»­ cá»§a má»™t táº­p há»£p gá»“m 10 pháº§n tá»­ lÃ ",
    options: ["$C_{10}^3$.", "$A_{10}^3$.", "$10^3$.", "$3^{10}$."],
    correctAnswer: 0,
    explanation:
      "Sá»‘ táº­p con cÃ³ 3 pháº§n tá»­ Ä‘Æ°á»£c chá»n tá»« táº­p há»£p 10 pháº§n tá»­ lÃ  tá»• há»£p cháº­p 3 cá»§a 10 pháº§n tá»­, kÃ½ hiá»‡u $C_{10}^3 = 120$.",
    image: null,
  },
  {
    id: "q35",
    type: "mcq",
    question:
      "Trong máº·t pháº³ng tá»a Ä‘á»™ $Oxy$, phÆ°Æ¡ng trÃ¬nh Ä‘Æ°á»ng tháº³ng Ä‘i qua Ä‘iá»ƒm $A(1;2)$ vÃ  song song vá»›i Ä‘Æ°á»ng tháº³ng $d: 2x - y + 3 = 0$ lÃ ",
    options: [
      "$2x + y - 4 = 0$.",
      "$2x - y = 0$.",
      "$x - 2y + 3 = 0$.",
      "$2x - y + 4 = 0$.",
    ],
    correctAnswer: 1,
    explanation:
      "ÄÆ°á»ng tháº³ng song song vá»›i $d$ cÃ³ dáº¡ng $2x - y + C = 0\\ (C \\neq 3)$. Äi qua $A(1;2) \\Rightarrow 2(1) - 2 + C = 0 \\Rightarrow C = 0$. Váº­y phÆ°Æ¡ng trÃ¬nh lÃ  $2x - y = 0$.",
    image: null,
  },
  {
    id: "q36",
    type: "fill",
    question:
      "Cho hÃ¬nh chÃ³p $S.ABC$ cÃ³ Ä‘Ã¡y $ABC$ lÃ  tam giÃ¡c vuÃ´ng táº¡i $B$, $AB=a, BC=a\\sqrt{3}$, $SA \\perp (ABC)$ vÃ  $SA=a\\sqrt{2}$. TÃ­nh gÃ³c giá»¯a Ä‘Æ°á»ng tháº³ng $SC$ vÃ  máº·t pháº³ng $(ABC)$ (Ä‘Æ¡n vá»‹: Ä‘á»™).",
    options: [],
    correctAnswer: "30",
    explanation:
      "GÃ³c giá»¯a $SC$ vÃ  $(ABC)$ lÃ  gÃ³c $\\widehat{SCA}$. Ta cÃ³ $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{a^2 + 3a^2} = 2a$. Trong tam giÃ¡c vuÃ´ng $SAC$: $\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{a\\sqrt{2}}{2a} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\widehat{SCA} = 30^\\circ$.",
    image: null,
  },
  {
    id: "q37",
    type: "fill",
    question:
      "Cho hÃ m sá»‘ $y = x^3 - 3x^2 + 2$. Gá»i $M, m$ láº§n lÆ°á»£t lÃ  giÃ¡ trá»‹ lá»›n nháº¥t vÃ  giÃ¡ trá»‹ nhá» nháº¥t cá»§a hÃ m sá»‘ trÃªn Ä‘oáº¡n $[0; 3]$. TÃ­nh tá»•ng $M + m$.",
    options: [],
    correctAnswer: "0",
    explanation:
      "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoáº·c $x = 2$. TÃ­nh giÃ¡ trá»‹ táº¡i cÃ¡c Ä‘iá»ƒm: $y(0) = 2, y(2) = -2, y(3) = 2$. Do Ä‘Ã³ $M = 2$ vÃ  $m = -2 \\Rightarrow M + m = 2 + (-2) = 0$.",
    image: null,
  },
  {
    id: "q38",
    type: "fill",
    question:
      "TÃ¬m sá»‘ nguyÃªn dÆ°Æ¡ng $n$ nhá» nháº¥t sao cho $C_n^1 + C_n^2 + \\dots + C_n^n > 1000$.",
    options: [],
    correctAnswer: "10",
    explanation:
      "Ta cÃ³ $C_n^0 + C_n^1 + \\dots + C_n^n = 2^n \\Rightarrow C_n^1 + C_n^2 + \\dots + C_n^n = 2^n - 1$. YÃªu cáº§u bÃ i toÃ¡n $\\Leftrightarrow 2^n - 1 > 1000 \\Rightarrow 2^n > 1001$. VÃ¬ $2^9 = 512$ vÃ  $2^{10} = 1024 > 1001$ nÃªn $n$ nhá» nháº¥t báº±ng $10$.",
    image: null,
  },
  {
    id: "q39",
    type: "fill",
    question:
      "Má»™t Ã´ tÃ´ Ä‘ang cháº¡y vá»›i váº­n tá»‘c $10\\text{ m/s}$ thÃ¬ ngÆ°á»i lÃ¡i Ä‘áº¡p phanh; tá»« thá»i Ä‘iá»ƒm Ä‘Ã³, Ã´ tÃ´ chuyá»ƒn Ä‘á»™ng cháº­m dáº§n Ä‘á»u vá»›i váº­n tá»‘c $v(t) = -2t + 10\\text{ (m/s)}$, trong Ä‘Ã³ $t$ lÃ  thá»i gian tÃ­nh báº±ng giÃ¢y ká»ƒ tá»« lÃºc báº¯t Ä‘áº§u Ä‘áº¡p phanh. Há»i tá»« lÃºc Ä‘áº¡p phanh Ä‘áº¿n khi dá»«ng háº³n, Ã´ tÃ´ Ä‘i Ä‘Æ°á»£c quÃ£ng Ä‘Æ°á»ng bao nhiÃªu mÃ©t?",
    options: [],
    correctAnswer: "25",
    explanation:
      "Ã” tÃ´ dá»«ng háº³n khi $v(t) = 0 \\Leftrightarrow -2t + 10 = 0 \\Leftrightarrow t = 5$ giÃ¢y. QuÃ£ng Ä‘Æ°á»ng Ä‘i Ä‘Æ°á»£c lÃ  $S = \\int_0^5 (-2t + 10) dt = \\left.[-t^2 + 10t]\\right|_0^5 = -25 + 50 = 25\\text{ m}$.",
    image: null,
  },
  {
    id: "q40",
    type: "fill",
    question:
      "Cho hÃ¬nh láº­p phÆ°Æ¡ng $ABCD.A'B'C'D'$ cÃ³ cáº¡nh báº±ng $a$. TÃ­nh khoáº£ng cÃ¡ch giá»¯a hai Ä‘Æ°á»ng tháº³ng $AB'$ vÃ  $BC'$ theo $a$ (nháº­p há»‡ sá»‘ tháº­p phÃ¢n gáº§n Ä‘Ãºng lÃ m trÃ²n 2 chá»¯ sá»‘ sau dáº¥u pháº©y cá»§a $\\frac{1}{\\sqrt{3}}$ náº¿u cÃ³).",
    options: [],
    correctAnswer: "0.58",
    explanation:
      "Khoáº£ng cÃ¡ch giá»¯a hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau $AB'$ vÃ  $BC'$ trong hÃ¬nh láº­p phÆ°Æ¡ng cáº¡nh $a$ báº±ng $\\frac{a}{\\sqrt{3}} \\approx 0.58a$.",
    image: null,
  },
  {
    id: "q41",
    type: "fill",
    question:
      "Cho hai sá»‘ thá»±c dÆ°Æ¡ng $x, y$ thá»a mÃ£n $\\log_3 x + \\log_3 y \\ge 1$. TÃ¬m giÃ¡ trá»‹ nhá» nháº¥t cá»§a $P = x + y$ (lÃ m trÃ²n káº¿t quáº£ Ä‘áº¿n 2 chá»¯ sá»‘ tháº­p phÃ¢n).",
    options: [],
    correctAnswer: "3.46",
    explanation:
      "$\\log_3 x + \\log_3 y = \\log_3(xy) \\ge 1 \\Rightarrow xy \\ge 3$. Ãp dá»¥ng BÄT CÃ´-si: $P = x + y \\ge 2\\sqrt{xy} \\ge 2\\sqrt{3} \\approx 3.46$. Dáº¥u báº±ng xáº£y ra khi $x = y = \\sqrt{3}$.",
    image: null,
  },
  {
    id: "q42",
    type: "fill",
    question:
      "Cho hÃ m sá»‘ $y=f(x)$ cÃ³ Ä‘á»“ thá»‹ nhÆ° hÃ¬nh váº½ bÃªn trÃªn. TÃ¬m sá»‘ Ä‘iá»ƒm cá»±c trá»‹ cá»§a hÃ m sá»‘ $g(x) = f(x^2 - 2x)$.",
    options: [],
    correctAnswer: "3",
    explanation:
      "Äáº¡o hÃ m $g'(x) = (2x - 2) f'(x^2 - 2x) = 0 \\Leftrightarrow x = 1$ hoáº·c $x^2 - 2x = x_i$ vá»›i $x_i$ lÃ  cÃ¡c Ä‘iá»ƒm cá»±c trá»‹ cá»§a $f(x)$. Dá»±a vÃ o Ä‘á»“ thá»‹ thu Ä‘Æ°á»£c tá»•ng cá»™ng 3 nghiá»‡m phÃ¢n biá»‡t Ä‘á»•i dáº¥u.",
    image: "cau_42.png",
  },
  {
    id: "q43",
    type: "fill",
    question:
      "TÃ¬m giÃ¡ trá»‹ cá»§a $m$ Ä‘á»ƒ phÆ°Æ¡ng trÃ¬nh $x^2 - 2x + m = 0$ cÃ³ hai nghiá»‡m phÃ¢n biá»‡t $x_1, x_2$ thá»a mÃ£n $x_1^2 + x_2^2 = 6$.",
    options: [],
    correctAnswer: "-1",
    explanation:
      "Äiá»u kiá»‡n cÃ³ 2 nghiá»‡m phÃ¢n biá»‡t: $\\Delta' = 1 - m > 0 \\Rightarrow m < 1$. Theo Vi-Ã©t $x_1 + x_2 = 2, x_1 x_2 = m$. Ta cÃ³ $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 4 - 2m = 6 \\Rightarrow 2m = -2 \\Rightarrow m = -1$ (thoáº£ mÃ£n).",
    image: null,
  },
  {
    id: "q44",
    type: "fill",
    question:
      "Trong khÃ´ng gian $Oxyz$, cho Ä‘iá»ƒm $A(1; 2; -1)$ vÃ  máº·t pháº³ng $(P): 2x - y + 2z - 1 = 0$. TÃ­nh khoáº£ng cÃ¡ch tá»« Ä‘iá»ƒm $A$ Ä‘áº¿n máº·t pháº³ng $(P)$.",
    options: [],
    correctAnswer: "1",
    explanation:
      "$d(A, (P)) = \\frac{|2(1) - 2 + 2(-1) - 1|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2 - 2 - 2 - 1|}{\\sqrt{9}} = \\frac{3}{3} = 1$.",
    image: null,
  },
  {
    id: "q45",
    type: "fill",
    question:
      "Cho dÃ£y sá»‘ $(u_n)$ xÃ¡c Ä‘á»‹nh bá»Ÿi $u_1 = 1, u_{n+1} = u_n + 2n + 1$. TÃ­nh giÃ¡ trá»‹ $u_{10}$.",
    options: [],
    correctAnswer: "100",
    explanation:
      "Ta cÃ³ $u_2 = u_1 + 3 = 4 = 2^2$; $u_3 = u_2 + 5 = 9 = 3^2$. Báº±ng phÆ°Æ¡ng phÃ¡p truy há»“i ta thu Ä‘Æ°á»£c cÃ´ng thá»©c tá»•ng quÃ¡t $u_n = n^2$. Do Ä‘Ã³ $u_{10} = 10^2 = 100$.",
    image: null,
  },
  {
    id: "q46",
    type: "fill",
    question:
      "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn cá»§a $m \\in [-10; 10]$ Ä‘á»ƒ hÃ m sá»‘ $y = x^3 - 3mx^2 + 3(m^2-1)x$ cÃ³ hai Ä‘iá»ƒm cá»±c trá»‹ náº±m vá» hai phÃ­a Ä‘á»‘i vá»›i trá»¥c tung?",
    options: [],
    correctAnswer: "1",
    explanation:
      "Äáº¡o hÃ m $y' = 3x^2 - 6mx + 3(m^2-1) = 3(x^2 - 2mx + m^2 - 1)$. HÃ m sá»‘ cÃ³ 2 Ä‘iá»ƒm cá»±c trá»‹ náº±m vá» 2 phÃ­a trá»¥c tung $\\Leftrightarrow y'=0$ cÃ³ 2 nghiá»‡m phÃ¢n biá»‡t trÃ¡i dáº¥u $\\Leftrightarrow a \\cdot c < 0 \\Leftrightarrow m^2 - 1 < 0 \\Leftrightarrow -1 < m < 1$. Do $m \\in \\mathbb{Z}$ nÃªn $m = 0$. CÃ³ 1 giÃ¡ trá»‹.",
    image: null,
  },
  {
    id: "q47",
    type: "fill",
    question:
      "TÃ¬m há»‡ sá»‘ cá»§a $x^5$ trong khai triá»ƒn nhá»‹ thá»©c Newton $(1 + 2x)^{10}$.",
    options: [],
    correctAnswer: "8064",
    explanation:
      "Sá»‘ háº¡ng tá»•ng quÃ¡t trong khai triá»ƒn lÃ  $T_{k+1} = C_{10}^k (2x)^k = C_{10}^k 2^k x^k$. Há»‡ sá»‘ cá»§a $x^5$ á»©ng vá»›i $k=5$ lÃ  $C_{10}^5 2^5 = 252 \\cdot 32 = 8064$.",
    image: null,
  },
  {
    id: "q48",
    type: "fill",
    question:
      "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh vuÃ´ng cáº¡nh $a$, $SA \\perp (ABCD)$ vÃ  $SA = a$. TÃ­nh thá»ƒ tÃ­ch $V$ cá»§a khá»‘i chÃ³p $S.ABCD$ theo $a^3$ (nháº­p há»‡ sá»‘ phÃ¢n sá»‘ $1/3$ hoáº·c $0.33$).",
    options: [],
    correctAnswer: "0.33",
    explanation:
      "Thá»ƒ tÃ­ch khá»‘i chÃ³p $V = \\frac{1}{3} S_{ABCD} \\cdot SA = \\frac{1}{3} a^2 \\cdot a = \\frac{1}{3} a^3 \\approx 0.33 a^3$.",
    image: null,
  },
  {
    id: "q49",
    type: "fill",
    question:
      "Biáº¿t $\\int_1^2 \\frac{1}{x(x+1)} dx = a\\ln 2 + b\\ln 3$ vá»›i $a, b \\in \\mathbb{Z}$. TÃ­nh $a + b$.",
    options: [],
    correctAnswer: "1",
    explanation:
      "$\\int_1^2 \\left(\\frac{1}{x} - \\frac{1}{x+1}\\right) dx = \\left.[\\ln|x| - \\ln|x+1|]\\right|_1^2 = (\\ln 2 - \\ln 3) - (\\ln 1 - \\ln 2) = 2\\ln 2 - \\ln 3$. Suy ra $a = 2, b = -1 \\Rightarrow a + b = 2 + (-1) = 1$.",
    image: null,
  },
  {
    id: "q50",
    type: "fill",
    question:
      "Xáº¿p ngáº«u nhiÃªn 5 há»c sinh nam vÃ  5 há»c sinh ná»¯ thÃ nh má»™t hÃ ng ngang. TÃ­nh xÃ¡c suáº¥t Ä‘á»ƒ nam ná»¯ Ä‘á»©ng xen káº½ nhau (nháº­p dáº¡ng phÃ¢n sá»‘ tá»‘i giáº£n $a/b$).",
    options: [],
    correctAnswer: "1/126",
    explanation:
      "Sá»‘ pháº§n tá»­ khÃ´ng gian máº«u $n(\\Omega) = 10!$. Äá»ƒ nam vÃ  ná»¯ Ä‘á»©ng xen káº½ cÃ³ 2 trÆ°á»ng há»£p: TH1 (Nam - Ná»¯ - Nam...): $5! \\times 5!$, TH2 (Ná»¯ - Nam - Ná»¯...): $5! \\times 5!$. XÃ¡c suáº¥t $P = \\frac{2 \\times 5! \\times 5!}{10!} = \\frac{2 \\times 120 \\times 120}{3628800} = \\frac{1}{126}$.",
    image: null,
  },
];
``

