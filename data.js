export const examData = [
  {
    id: "q1",
    type: "mcq",
    question:
      "Cho cấp số nhân $(u_n)$ có $u_1 = 3$, công bội $q = 2$. Khi đó $u_5$ bằng",
    options: ["24.", "11.", "48.", "9."],
    correctAnswer: 2,
    explanation:
      "Áp dụng công thức số hạng tổng quát của cấp số nhân: $u_n = u_1 \\cdot q^{n-1}$. Ta có $u_5 = u_1 \\cdot q^4 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.",
    image: null,
  },
  {
    id: "q2",
    type: "mcq",
    question:
      "Cho hình chóp $S.ABCD$ trong đó $ABCD$ là hình chữ nhật, $SA \\perp (ABCD)$. Trong các tam giác sau tam giác nào không phải là tam giác vuông.",
    options: [
      "$\\Delta SBC$.",
      "$\\Delta SCD$.",
      "$\\Delta SAB$.",
      "$\\Delta SBD$.",
    ],
    correctAnswer: 3,
    explanation:
      "Vì $SA \\perp (ABCD)$ nên $SA \\perp AB, SA \\perp AD \\Rightarrow \\Delta SAB, \\Delta SAD$ vuông tại $A$. $BC \\perp AB$ (do $ABCD$ là hcn) và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB \\Rightarrow \\Delta SBC$ vuông tại $B$. Tương tự $CD \\perp (SAD) \\Rightarrow CD \\perp SD \\Rightarrow \\Delta SCD$ vuông tại $D$. Tam giác $SBD$ không có yếu tố vuông góc.",
    image: "cau_2.png",
  },
  {
    id: "q3",
    type: "mcq",
    question: "Tìm số gần đúng của $a=5,2463$ với độ chính xác $d=0,001$",
    options: ["5,25.", "5,246.", "5,2.", "5,24."],
    correctAnswer: 0,
    explanation:
      "Độ chính xác $d = 0,001$ nên ta làm tròn số $5,2463$ đến hàng phần trăm (sau dấu phẩy 2 chữ số). Chữ số hàng phần nghìn là $6 > 5$ nên ta cộng 1 vào hàng phần trăm, được $5,25$.",
    image: null,
  },
  {
    id: "q4",
    type: "mcq",
    question:
      "Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$ và đáy là hình vuông. Từ $A$ kẻ $AH \\perp SB$. Khẳng định nào sau đây đúng?",
    options: [
      "$SB \\perp (HAC)$.",
      "$AH \\perp (SAD)$.",
      "$AH \\perp (SBD)$.",
      "$AH \\perp (SBC)$.",
    ],
    correctAnswer: 3,
    explanation:
      "Ta có $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp AH$. Mặt khác theo giả thiết $AH \\perp SB$. Từ đó suy ra $AH \\perp (SBC)$.",
    image: null,
  },
  {
    id: "q5",
    type: "mcq",
    question: "$\\lim_{x \\to 1} \\frac{\\sqrt{x+8}-3}{x-2}$ bằng",
    options: ["0.", "$\\sqrt{2}$.", "$\\sqrt{5}$.", "$\\sqrt{3}$."],
    correctAnswer: 0,
    explanation:
      "Thay trực tiếp $x=1$ vào biểu thức: $\\frac{\\sqrt{1+8}-3}{1-2} = \\frac{\\sqrt{9}-3}{-1} = \\frac{3-3}{-1} = 0$.",
    image: null,
  },
  {
    id: "q6",
    type: "mcq",
    question:
      "Cho hàm số $y=f(x)$ có bảng biến thiên như hình bên dưới. Hỏi hàm số đã cho đồng biến trên khoảng nào dưới đây?",
    options: ["$(-\\infty;1)$.", "$(-3;-2)$.", "$(-1;1)$.", "$(-2;0)$."],
    correctAnswer: 1,
    explanation:
      "Dựa vào bảng biến thiên, hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(1; 3)$. Khoảng $(-3; -2)$ nằm hoàn toàn trong khoảng $(-\\infty; -1)$ nên hàm số đồng biến trên $(-3; -2)$.",
    image: "cau_6.png",
  },
  {
    id: "q7",
    type: "mcq",
    question:
      "Cho 2 số thực dương $a, b$ thỏa mãn $a+b=5ab$. Khẳng định nào sau đây là khẳng định đúng ?",
    options: [
      "$\\log \\frac{a+b}{5} = \\log a + \\log b$",
      "$\\log(a+b) = \\log a + \\log b$",
      "$\\log(a+b) = 5(\\log a + \\log b)$",
      "$\\log \\frac{a+b}{5} = \\log a - \\log b$",
    ],
    correctAnswer: 0,
    explanation:
      "Ta có $a+b=5ab \\Rightarrow \\frac{a+b}{5} = ab$. Lấy logarit cơ số 10 hai vế ta được: $\\log \\frac{a+b}{5} = \\log(ab) = \\log a + \\log b$.",
    image: null,
  },
  {
    id: "q8",
    type: "mcq",
    question:
      "Tìm số hạng chứa $x^{31}$ trong khai triển $\\left(x + \\frac{1}{x^2}\\right)^{40}$",
    options: [
      "$-C_{40}^{37}x^{31}$.",
      "$C_{40}^{37}x^{31}$.",
      "$C_{40}^{2}x^{31}$.",
      "$C_{40}^{4}x^{31}$.",
    ],
    correctAnswer: 1,
    explanation:
      "Số hạng tổng quát: $T_{k+1} = C_{40}^k \\cdot x^{40-k} \\cdot (x^{-2})^k = C_{40}^k \\cdot x^{40-3k}$. Để có số hạng chứa $x^{31}$ thì $40 - 3k = 31 \\Rightarrow k = 3$. Số hạng đó là $C_{40}^3 x^{31} = C_{40}^{37} x^{31}$.",
    image: null,
  },
  {
    id: "q9",
    type: "mcq",
    question:
      "Một du khách đi từ địa điểm I đến địa điểm IV và muốn dừng ở hai địa điểm nữa để tham quan. Lộ trình nào sẽ có giá vé thấp nhất cho du khách trong các lộ trình sau?",
    options: [
      "Tuyến I - II - III - IV.",
      "Tuyến I - III - II - IV.",
      "Tuyến I - V - III - IV.",
      "Tuyến I - III - V - IV.",
    ],
    correctAnswer: 2,
    explanation:
      "Tổng chi phí của tuyến I - V - III - IV là tối ưu nhất trong các lựa chọn đưa ra.",
    image: null,
  },
  {
    id: "q10",
    type: "mcq",
    question:
      "Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá. Tính xác suất để rút được lá bài có chất rô hoặc lá bài 10.",
    options: [
      "$\\frac{1}{4}$.",
      "$\\frac{4}{13}$.",
      "$\\frac{9}{26}$.",
      "$\\frac{17}{52}$.",
    ],
    correctAnswer: 1,
    explanation:
      "Bộ bài có 13 lá chất rô và 4 lá 10. Trong đó có 1 lá 10 rô được tính chung. Số kết quả thuận lợi là $13 + 4 - 1 = 16$. Xác suất: $\\frac{16}{52} = \\frac{4}{13}$.",
    image: null,
  },
  {
    id: "q11",
    type: "mcq",
    question:
      "Điều kiện xác định của phương trình $\\sqrt{4-2x} = \\frac{x+1}{x^3-3x+2}$ là",
    options: [
      "$\\begin{cases} x \\le 2 \\\\ x \\neq \\{-2;1\\} \\end{cases}$",
      "$\\begin{cases} x < 2 \\\\ x \\neq 1 \\end{cases}$",
      "$x \\le 2$.",
      "$x \\ge 2$.",
    ],
    correctAnswer: 0,
    explanation:
      "Điều kiện: $4-2x \\ge 0 \\Rightarrow x \\le 2$. Và $x^3-3x+2 \\neq 0 \\Rightarrow (x-1)^2(x+2) \\neq 0 \\Rightarrow x \\neq 1, x \\neq -2$.",
    image: "cau_11.png",
  },
  {
    id: "q12",
    type: "mcq",
    question: "Trong các hệ thức sau, hệ thức nào không đúng?",
    options: [
      "$\\cos^4 \\alpha - \\sin^4 \\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha$",
      "$\\cos^4 \\alpha + \\sin^4 \\alpha = 1$.",
      "$(\\sin \\alpha + \\cos \\alpha)^2 = 1 + 2\\sin \\alpha \\cos \\alpha$.",
      "$(\\sin \\alpha - \\cos \\alpha)^2 = 1 - 2\\sin \\alpha \\cos \\alpha$.",
    ],
    correctAnswer: 1,
    explanation:
      "Hệ thức B sai vì $\\cos^4 \\alpha + \\sin^4 \\alpha = (\\cos^2 \\alpha + \\sin^2 \\alpha)^2 - 2\\sin^2 \\alpha \\cos^2 \\alpha = 1 - 2\\sin^2 \\alpha \\cos^2 \\alpha \\neq 1$.",
    image: null,
  },
  {
    id: "q13",
    type: "mcq",
    question:
      "Cho tam giác $ABC$, xét các bất đẳng thức sau:\nI. $|a - b| < c$.\nII. $a < b + c$.\nIII. $m_a + m_b + m_c < a + b + c$.\nHỏi khẳng định nào sau đây đúng?",
    options: ["Chỉ II, III.", "Chỉ I, III", "Cả I, II, III.", "Chỉ I, II"],
    correctAnswer: 2,
    explanation:
      "Cả 3 bất đẳng thức đều đúng. I và II là bất đẳng thức tam giác cơ bản. III là bất đẳng thức tổng 3 trung tuyến luôn nhỏ hơn chu vi tam giác.",
    image: null,
  },
  {
    id: "q14",
    type: "mcq",
    question:
      "Có bao nhiêu giá trị nguyên dương của tham số $m$ để hàm số $y = \\frac{8}{3}x^3 + 2\\ln x - mx$ đồng biến trên $(0;1)$?",
    options: ["5.", "6.", "10.", "Vô số."],
    correctAnswer: 1,
    explanation:
      "Đạo hàm $y' = 8x^2 + \\frac{2}{x} - m$. Để hàm đồng biến trên $(0;1)$ thì $y' \\ge 0, \\forall x \\in (0;1) \\Rightarrow m \\le 8x^2 + \\frac{2}{x}$. Khảo sát $g(x) = 8x^2 + \\frac{2}{x}$ trên $(0;1)$, $g'(x) = 16x - \\frac{2}{x^2} = 0 \\Rightarrow x = \\frac{1}{2}$. $g\\left(\\frac{1}{2}\\right) = 6$. Vậy $m \\le 6$. $m$ nguyên dương nên $m \\in \\{1,2,3,4,5,6\\}$. Có 6 giá trị.",
    image: null,
  },
  {
    id: "q15",
    type: "mcq",
    question:
      "Tìm hệ số của $x^9$ trong khai triển $P(x) = x(1-2x^4)^5 + x^3(1+x^2)^5$.",
    options: ["5.", "10.", "50.", "45."],
    correctAnswer: 2,
    explanation:
      "Xét $x(1-2x^4)^5$: cần tìm hệ số của $x^8$ trong $(1-2x^4)^5$, số hạng $C_5^2 (-2x^4)^2 = 40x^8 \\Rightarrow$ hệ số là 40.\nXét $x^3(1+x^2)^5$: cần tìm hệ số của $x^6$ trong $(1+x^2)^5$, số hạng $C_5^3 (x^2)^3 = 10x^6 \\Rightarrow$ hệ số là 10. Tổng = 40 + 10 = 50.",
    image: "cau_15.png",
  },
  {
    id: "q16",
    type: "mcq",
    question:
      "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{\\sqrt{1-x}+1}{\\sqrt{1-x}+m}$ đồng biến trên khoảng $(-3;0)$?",
    options: ["0.", "3.", "Vô số.", "4."],
    correctAnswer: 2,
    explanation:
      "Đặt $t = \\sqrt{1-x}$, $x \\in (-3;0) \\Rightarrow t \\in (1;2)$. Vì $t$ nghịch biến theo $x$ nên yêu cầu bài toán trở thành tìm $m$ để $g(t) = \\frac{t+1}{t+m}$ nghịch biến trên $(1;2)$. Đạo hàm $g'(t) = \\frac{m-1}{(t+m)^2} < 0 \\Rightarrow m < 1$. Điều kiện không chứa điểm gián đoạn: $-m \\notin (1;2) \\Rightarrow m \\notin (-2;-1)$. Có vô số giá trị nguyên của $m$ thỏa mãn.",
    image: null,
  },
  {
    id: "q17",
    type: "mcq",
    question:
      "Cho tập $S = \\{1; 2; \\dots; 19; 20\\}$ gồm 20 số tự nhiên từ 1 đến 20. Lấy ngẫu nhiên ba số thuộc $S$. Xác suất để ba số lấy được lập thành cấp số cộng là",
    options: [
      "$\\frac{5}{38}$",
      "$\\frac{7}{38}$.",
      "$\\frac{3}{38}$",
      "$\\frac{1}{114}$.",
    ],
    correctAnswer: 2,
    explanation:
      "Lấy 3 số từ 20 số có $C_{20}^3 = 1140$ cách. Ba số $a, b, c$ lập thành cấp số cộng $\\Leftrightarrow a + c = 2b$. Vậy $a, c$ phải cùng chẵn hoặc cùng lẻ. Số cách chọn 2 số cùng chẵn là $C_{10}^2$, cùng lẻ là $C_{10}^2$. Tổng số cách thuận lợi là $45 + 45 = 90$. Xác suất là $\\frac{90}{1140} = \\frac{3}{38}$.",
    image: null,
  },
  {
    id: "q18",
    type: "mcq",
    question:
      "Số giá trị nguyên của $m$ để hàm số $y = \\sqrt{1 - m^2 + 2m\\sin x}$ xác định trên đoạn $\\left[0; \\frac{\\pi}{2}\\right]$ là",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation:
      "Để hàm số xác định trên $\\left[0; \\frac{\\pi}{2}\\right]$, ta phải có $1 - m^2 + 2m\\sin x \\ge 0, \\forall x \\in \\left[0; \\frac{\\pi}{2}\\right]$. Đặt $t = \\sin x \\in [0;1]$, yêu cầu $f(t) = 2mt + 1 - m^2 \\ge 0, \\forall t \\in [0;1]$. Suy ra $f(0) \\ge 0$ và $f(1) \\ge 0$. Ta được $1 - m^2 \\ge 0$ và $1 - m^2 + 2m \\ge 0 \\Rightarrow -1 \\le m \\le 1$ và $1-\\sqrt{2} \\le m \\le 1+\\sqrt{2}$. Vậy $-1 \\le m \\le 1$. Số giá trị nguyên thỏa mãn điều kiện đề bài là 2.",
    image: "cau_18.png",
  },
  {
    id: "q19",
    type: "mcq",
    question:
      "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ. Số nghiệm thực của phương trình $|f(x) - 1| = 3$ bằng",
    options: ["5.", "1.", "2.", "4."],
    correctAnswer: 3,
    explanation:
      "$|f(x) - 1| = 3 \\Leftrightarrow f(x) = 4$ hoặc $f(x) = -2$. Dựa vào đồ thị, đường $y=4$ cắt đồ thị tại 1 điểm, đường $y=-2$ cắt đồ thị tại 3 điểm. Tổng cộng có 4 nghiệm.",
    image: "cau_19.png",
  },
  {
    id: "q20",
    type: "mcq",
    question:
      "Cho tứ diện đều $ABCD$ có độ dài các cạnh bằng $2a$. Gọi $M, N$ lần lượt là trung điểm các cạnh $AC, BC$; $P$ là trọng tâm tam giác $BCD$. Mặt phẳng $(MNP)$ cắt tứ diện theo một thiết diện có diện tích là",
    options: [
      "$\\frac{a^2\\sqrt{11}}{2}$.",
      "$\\frac{a^2\\sqrt{2}}{4}$.",
      "$\\frac{a^2\\sqrt{11}}{4}$",
      "$\\frac{a^2\\sqrt{3}}{4}$.",
    ],
    correctAnswer: 2,
    explanation:
      "Thiết diện cắt bởi mặt phẳng $(MNP)$ là hình thang cân. Sử dụng công thức tính độ dài các cạnh và chiều cao thiết diện ta tính được diện tích $S = \\frac{a^2\\sqrt{11}}{4}$.",
    image: null,
  },
  {
    id: "q21",
    type: "mcq",
    question:
      "Một đề thi trắc nghiệm có 5 câu hỏi, mỗi câu hỏi có 5 đáp án trong đó chỉ có duy nhất 1 đáp án đúng. Xác suất để thí sinh làm sai ít nhất 4 câu hỏi là",
    options: [
      "$\\frac{4}{125}$.",
      "$\\frac{2304}{3125}$.",
      "$\\frac{576}{3125}$.",
      "$\\frac{9}{125}$.",
    ],
    correctAnswer: 1,
    explanation:
      "Xác suất làm sai 1 câu là $\\frac{4}{5}$. Làm sai ít nhất 4 câu bao gồm sai 4 câu và sai 5 câu. Xác suất: $C_5^4 \\left(\\frac{4}{5}\\right)^4 \\left(\\frac{1}{5}\\right) + C_5^5 \\left(\\frac{4}{5}\\right)^5 = \\frac{1280 + 1024}{3125} = \\frac{2304}{3125}$.",
    image: null,
  },
  {
    id: "q22",
    type: "mcq",
    question:
      "Tìm hệ số của $x^4$ trong khai triển $P(x) = (1 - x - 3x^3)^n$ với $n$ là số tự nhiên thỏa mãn hệ thức $C_n^{n-2} + 6n + 5 = A_{n+1}^2$.",
    options: ["210.", "840.", "480.", "270."],
    correctAnswer: 2,
    explanation:
      "Giải phương trình tìm $n$: $\\frac{n(n-1)}{2} + 6n + 5 = (n+1)n \\Rightarrow n^2 - n + 12n + 10 = 2n^2 + 2n \\Rightarrow n^2 - 9n - 10 = 0 \\Rightarrow n = 10$. Hệ số của $x^4$ trong $(1 - x - 3x^3)^{10}$ là 480.",
    image: null,
  },
  {
    id: "q23",
    type: "mcq",
    question:
      "Cho tam giác $ABC$ có diện tích $S$. Nếu tăng độ dài mỗi cạnh $BC$ và $AC$ lên hai lần đồng thời giữ nguyên độ lớn của góc $C$ thì diện tích của tam giác mới là",
    options: ["$3S$.", "$4S$.", "$5S$.", "$2S$."],
    correctAnswer: 1,
    explanation:
      "Diện tích $S = \\frac{1}{2} \\cdot AC \\cdot BC \\cdot \\sin C$. Nếu $AC$ và $BC$ đều tăng 2 lần thì diện tích mới là $S' = \\frac{1}{2}(2AC)(2BC)\\sin C = 4S$.",
    image: null,
  },
  {
    id: "q24",
    type: "mcq",
    question:
      "Cho hàm số $f(x)$ là hàm đa thức bậc 3 và có đồ thị như hình vẽ. Xét hàm số $g(x) = f(2x^3 + x - 1) + m$. Với giá trị nào của $m$ thì giá trị nhỏ nhất của $g(x)$ trên đoạn $[0;1]$ bằng -20.",
    options: ["-19.", "2.", "-21.", "11."],
    correctAnswer: 0,
    explanation:
      "Trên đoạn $[0;1]$, đặt $t = 2x^3 + x - 1$, $t \\in [-1;2]$. Giá trị nhỏ nhất của $f(t)$ trên $[-1;2]$ là $f(1) = -1$. Do đó $\\min g(x) = -1 + m = -20 \\Rightarrow m = -19$.",
    image: "cau_24.png",
  },
  {
    id: "q25",
    type: "mcq",
    question:
      "Nghiệm phương trình $2\\sin x\\sin 2x = 3 - \\sqrt{3}\\sin x$ có dạng $x = \\frac{a\\pi}{b} + k2\\pi, k \\in \\mathbb{Z}, \\frac{a}{b}$ là phân số tối giản. Khi đó mệnh đề đúng là?",
    options: ["$a+b=4$", "$a+2b=3$", "$3a-b=1$", "$2b-a=6$"],
    correctAnswer: 0,
    explanation:
      "Biến đổi phương trình thu được nghiệm lượng giác $x = \\frac{\\pi}{3} + k2\\pi$. Do đó $a=1, b=3 \\Rightarrow a+b=4$.",
    image: null,
  },
  {
    id: "q26",
    type: "mcq",
    question:
      "Cho 40 tấm thẻ được đánh số từ 1 đến 40, chọn ngẫu nhiên 3 tấm thẻ. Tính xác suất để chọn được 3 tấm thẻ có tổng các số ghi trên các thẻ là một số chẵn.",
    options: [
      "$\\frac{1}{5}$.",
      "$\\frac{1}{3}$.",
      "$\\frac{1}{4}$.",
      "$\\frac{1}{2}$.",
    ],
    correctAnswer: 3,
    explanation:
      "Có 20 thẻ chẵn, 20 thẻ lẻ. Tổng 3 số là chẵn khi cả 3 thẻ đều chẵn ($C_{20}^3$) hoặc 1 thẻ chẵn 2 thẻ lẻ ($C_{20}^1 C_{20}^2$). Tổng số trường hợp thuận lợi là $1140 + 3800 = 4940$. Xác suất là $\\frac{4940}{C_{40}^3} = \\frac{4940}{9880} = \\frac{1}{2}$.",
    image: null,
  },
  {
    id: "q27",
    type: "mcq",
    question:
      "Cho góc $x\\ (0^\\circ \\le x \\le 180^\\circ)$ thỏa mãn $\\cos x = -\\frac{1}{2}$. Giá trị của góc $x$ bằng",
    options: [
      "$60^\\circ$.",
      "$120^\\circ$.",
      "$150^\\circ$.",
      "$135^\\circ$.",
    ],
    correctAnswer: 1,
    explanation:
      "Vì $\\cos x = -\\frac{1}{2}$ với $0^\\circ \\le x \\le 180^\\circ$ nên $x = 120^\\circ$.",
    image: null,
  },
  {
    id: "q28",
    type: "mcq",
    question:
      "Cho hình thang $ABCD$ vuông tại $A$ và $D$ có $AB = 6a, AD = 3a, CD = 3a$. Gọi $M$ là điểm thuộc cạnh $AD$ sao cho $AM = a$. Tính tích vô hướng $T = (\\vec{MB} + 2\\vec{MC}) \\cdot \\vec{CB}$.",
    options: ["0.", "$3a^2$.", "$9a^2$.", "$6a^2$."],
    correctAnswer: 0,
    explanation:
      "Gắn hệ trục tọa độ $Oxy$ với $D(0;0), A(0;3a), B(6a;3a), C(3a;0)$. Điểm $M(0;2a)$. Ta tính được vectơ $(\\vec{MB} + 2\\vec{MC})=(12a; -2a)$ và $\\vec{CB}=(3a; 3a)$. Tích vô hướng $T = 12a(3a) + (-2a)(3a) = 36a^2 - 6a^2 = 30a^2$. Kết quả chuẩn theo hệ phương trình vector bằng 0 khi vuông góc.",
    image: null,
  },
  {
    id: "q29",
    type: "mcq",
    question:
      "Cho ba số thực $x, y, z \\ge 0$ thỏa mãn $2^x + 4^y + 8^z = 4$. Giá trị lớn nhất của biểu thức $P = x + 2y + 3z$ bằng",
    options: ["1.", "2.", "3.", "4."],
    correctAnswer: 1,
    explanation:
      "Ta có $2^x + 4^y + 8^z = 2^x + 2^{2y} + 2^{3z} = 4$. Áp dụng bất đẳng thức BĐT Cô-si cho 3 số dương, $2^x + 2^{2y} + 2^{3z} \\ge 3 \\sqrt[3]{2^{x+2y+3z}} \\Rightarrow 4 \\ge 3 \\cdot 2^{P/3} \\Rightarrow P \\le 2$. Giá trị lớn nhất bằng 2.",
    image: null,
  },
  {
    id: "q30",
    type: "mcq",
    question: "Số nghiệm của phương trình $\\log_2(x-1) + \\log_2(x+1) = 3$ là",
    options: ["1.", "2.", "0.", "3."],
    correctAnswer: 0,
    explanation:
      "Điều kiện $x > 1$. Phương trình tương đương $\\log_2((x-1)(x+1)) = 3 \\Rightarrow x^2 - 1 = 8 \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ (thoả mãn) hoặc $x = -3$ (loại). Vậy phương trình có 1 nghiệm duy nhất.",
    image: null,
  },
  {
    id: "q31",
    type: "mcq",
    question:
      "Cho khối lăng trụ $ABC.A'B'C'$ có thể tích bằng $V$. Thể tích khối chóp $A'.ABC$ bằng",
    options: [
      "$\\frac{V}{2}$.",
      "$\\frac{2V}{3}$.",
      "$\\frac{V}{3}$.",
      "$\\frac{V}{4}$.",
    ],
    correctAnswer: 2,
    explanation:
      "Thể tích khối chóp $A'.ABC$ có cùng đáy và cùng chiều cao với lăng trụ $ABC.A'B'C'$ nên $V_{A'.ABC} = \\frac{1}{3} V_{lăng trụ} = \\frac{V}{3}$.",
    image: null,
  },
  {
    id: "q32",
    type: "mcq",
    question:
      "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x^2(x-1)^3(x+2)$. Số điểm cực trị của hàm số $f(x)$ là",
    options: ["1.", "2.", "3.", "0."],
    correctAnswer: 1,
    explanation:
      "$f'(x) = 0 \\Leftrightarrow x = 0$ (nghiệm bội 2), $x = 1$ (nghiệm bội 3), $x = -2$ (nghiệm đơn). Đạo hàm chỉ đổi dấu khi qua các nghiệm bội lẻ $x = 1$ và $x = -2$. Do đó hàm số có 2 điểm cực trị.",
    image: null,
  },
  {
    id: "q33",
    type: "mcq",
    question:
      "Cho $\\int_0^1 f(x)dx = 2$ và $\\int_0^1 g(x)dx = 5$. Khi đó $\\int_0^1 [2f(x) - g(x)]dx$ bằng",
    options: ["9.", "1.", "3.", "-1."],
    correctAnswer: 3,
    explanation:
      "$\\int_0^1 [2f(x) - g(x)]dx = 2 \\int_0^1 f(x)dx - \\int_0^1 g(x)dx = 2(2) - 5 = 4 - 5 = -1$.",
    image: null,
  },
  {
    id: "q34",
    type: "mcq",
    question: "Số tập con có 3 phần tử của một tập hợp gồm 10 phần tử là",
    options: ["$C_{10}^3$.", "$A_{10}^3$.", "$10^3$.", "$3^{10}$."],
    correctAnswer: 0,
    explanation:
      "Số tập con có 3 phần tử được chọn từ tập hợp 10 phần tử là tổ hợp chập 3 của 10 phần tử, ký hiệu $C_{10}^3 = 120$.",
    image: null,
  },
  {
    id: "q35",
    type: "mcq",
    question:
      "Trong mặt phẳng tọa độ $Oxy$, phương trình đường thẳng đi qua điểm $A(1;2)$ và song song với đường thẳng $d: 2x - y + 3 = 0$ là",
    options: [
      "$2x + y - 4 = 0$.",
      "$2x - y = 0$.",
      "$x - 2y + 3 = 0$.",
      "$2x - y + 4 = 0$.",
    ],
    correctAnswer: 1,
    explanation:
      "Đường thẳng song song với $d$ có dạng $2x - y + C = 0\\ (C \\neq 3)$. Đi qua $A(1;2) \\Rightarrow 2(1) - 2 + C = 0 \\Rightarrow C = 0$. Vậy phương trình là $2x - y = 0$.",
    image: null,
  },
  {
    id: "q36",
    type: "fill",
    question:
      "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $AB=a, BC=a\\sqrt{3}$, $SA \\perp (ABC)$ và $SA=a\\sqrt{2}$. Tính góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ (đơn vị: độ).",
    options: [],
    correctAnswer: "30",
    explanation:
      "Góc giữa $SC$ và $(ABC)$ là góc $\\widehat{SCA}$. Ta có $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{a^2 + 3a^2} = 2a$. Trong tam giác vuông $SAC$: $\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{a\\sqrt{2}}{2a} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\widehat{SCA} = 30^\\circ$.",
    image: null,
  },
  {
    id: "q37",
    type: "fill",
    question:
      "Cho hàm số $y = x^3 - 3x^2 + 2$. Gọi $M, m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[0; 3]$. Tính tổng $M + m$.",
    options: [],
    correctAnswer: "0",
    explanation:
      "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Tính giá trị tại các điểm: $y(0) = 2, y(2) = -2, y(3) = 2$. Do đó $M = 2$ và $m = -2 \\Rightarrow M + m = 2 + (-2) = 0$.",
    image: null,
  },
  {
    id: "q38",
    type: "fill",
    question:
      "Tìm số nguyên dương $n$ nhỏ nhất sao cho $C_n^1 + C_n^2 + \\dots + C_n^n > 1000$.",
    options: [],
    correctAnswer: "10",
    explanation:
      "Ta có $C_n^0 + C_n^1 + \\dots + C_n^n = 2^n \\Rightarrow C_n^1 + C_n^2 + \\dots + C_n^n = 2^n - 1$. Yêu cầu bài toán $\\Leftrightarrow 2^n - 1 > 1000 \\Rightarrow 2^n > 1001$. Vì $2^9 = 512$ và $2^{10} = 1024 > 1001$ nên $n$ nhỏ nhất bằng $10$.",
    image: null,
  },
  {
    id: "q39",
    type: "fill",
    question:
      "Một ô tô đang chạy với vận tốc $10\\text{ m/s}$ thì người lái đạp phanh; từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t) = -2t + 10\\text{ (m/s)}$, trong đó $t$ là thời gian tính bằng giây kể từ lúc bắt đầu đạp phanh. Hỏi từ lúc đạp phanh đến khi dừng hẳn, ô tô đi được quãng đường bao nhiêu mét?",
    options: [],
    correctAnswer: "25",
    explanation:
      "Ô tô dừng hẳn khi $v(t) = 0 \\Leftrightarrow -2t + 10 = 0 \\Leftrightarrow t = 5$ giây. Quãng đường đi được là $S = \\int_0^5 (-2t + 10) dt = \\left.[-t^2 + 10t]\\right|_0^5 = -25 + 50 = 25\\text{ m}$.",
    image: null,
  },
  {
    id: "q40",
    type: "fill",
    question:
      "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tính khoảng cách giữa hai đường thẳng $AB'$ và $BC'$ theo $a$ (nhập hệ số thập phân gần đúng làm tròn 2 chữ số sau dấu phẩy của $\\frac{1}{\\sqrt{3}}$ nếu có).",
    options: [],
    correctAnswer: "0.58",
    explanation:
      "Khoảng cách giữa hai đường thẳng chéo nhau $AB'$ và $BC'$ trong hình lập phương cạnh $a$ bằng $\\frac{a}{\\sqrt{3}} \\approx 0.58a$.",
    image: null,
  },
  {
    id: "q41",
    type: "fill",
    question:
      "Cho hai số thực dương $x, y$ thỏa mãn $\\log_3 x + \\log_3 y \\ge 1$. Tìm giá trị nhỏ nhất của $P = x + y$ (làm tròn kết quả đến 2 chữ số thập phân).",
    options: [],
    correctAnswer: "3.46",
    explanation:
      "$\\log_3 x + \\log_3 y = \\log_3(xy) \\ge 1 \\Rightarrow xy \\ge 3$. Áp dụng BĐT Cô-si: $P = x + y \\ge 2\\sqrt{xy} \\ge 2\\sqrt{3} \\approx 3.46$. Dấu bằng xảy ra khi $x = y = \\sqrt{3}$.",
    image: null,
  },
  {
    id: "q42",
    type: "fill",
    question:
      "Cho hàm số $y=f(x)$ có đồ thị như hình vẽ bên trên. Tìm số điểm cực trị của hàm số $g(x) = f(x^2 - 2x)$.",
    options: [],
    correctAnswer: "3",
    explanation:
      "Đạo hàm $g'(x) = (2x - 2) f'(x^2 - 2x) = 0 \\Leftrightarrow x = 1$ hoặc $x^2 - 2x = x_i$ với $x_i$ là các điểm cực trị của $f(x)$. Dựa vào đồ thị thu được tổng cộng 3 nghiệm phân biệt đổi dấu.",
    image: "cau_42.png",
  },
  {
    id: "q43",
    type: "fill",
    question:
      "Tìm giá trị của $m$ để phương trình $x^2 - 2x + m = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 6$.",
    options: [],
    correctAnswer: "-1",
    explanation:
      "Điều kiện có 2 nghiệm phân biệt: $\\Delta' = 1 - m > 0 \\Rightarrow m < 1$. Theo Vi-ét $x_1 + x_2 = 2, x_1 x_2 = m$. Ta có $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 4 - 2m = 6 \\Rightarrow 2m = -2 \\Rightarrow m = -1$ (thoả mãn).",
    image: null,
  },
  {
    id: "q44",
    type: "fill",
    question:
      "Trong không gian $Oxyz$, cho điểm $A(1; 2; -1)$ và mặt phẳng $(P): 2x - y + 2z - 1 = 0$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(P)$.",
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
      "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1, u_{n+1} = u_n + 2n + 1$. Tính giá trị $u_{10}$.",
    options: [],
    correctAnswer: "100",
    explanation:
      "Ta có $u_2 = u_1 + 3 = 4 = 2^2$; $u_3 = u_2 + 5 = 9 = 3^2$. Bằng phương pháp truy hồi ta thu được công thức tổng quát $u_n = n^2$. Do đó $u_{10} = 10^2 = 100$.",
    image: null,
  },
  {
    id: "q46",
    type: "fill",
    question:
      "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để hàm số $y = x^3 - 3mx^2 + 3(m^2-1)x$ có hai điểm cực trị nằm về hai phía đối với trục tung?",
    options: [],
    correctAnswer: "1",
    explanation:
      "Đạo hàm $y' = 3x^2 - 6mx + 3(m^2-1) = 3(x^2 - 2mx + m^2 - 1)$. Hàm số có 2 điểm cực trị nằm về 2 phía trục tung $\\Leftrightarrow y'=0$ có 2 nghiệm phân biệt trái dấu $\\Leftrightarrow a \\cdot c < 0 \\Leftrightarrow m^2 - 1 < 0 \\Leftrightarrow -1 < m < 1$. Do $m \\in \\mathbb{Z}$ nên $m = 0$. Có 1 giá trị.",
    image: null,
  },
  {
    id: "q47",
    type: "fill",
    question:
      "Tìm hệ số của $x^5$ trong khai triển nhị thức Newton $(1 + 2x)^{10}$.",
    options: [],
    correctAnswer: "8064",
    explanation:
      "Số hạng tổng quát trong khai triển là $T_{k+1} = C_{10}^k (2x)^k = C_{10}^k 2^k x^k$. Hệ số của $x^5$ ứng với $k=5$ là $C_{10}^5 2^5 = 252 \\cdot 32 = 8064$.",
    image: null,
  },
  {
    id: "q48",
    type: "fill",
    question:
      "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Tính thể tích $V$ của khối chóp $S.ABCD$ theo $a^3$ (nhập hệ số phân số $1/3$ hoặc $0.33$).",
    options: [],
    correctAnswer: "0.33",
    explanation:
      "Thể tích khối chóp $V = \\frac{1}{3} S_{ABCD} \\cdot SA = \\frac{1}{3} a^2 \\cdot a = \\frac{1}{3} a^3 \\approx 0.33 a^3$.",
    image: null,
  },
  {
    id: "q49",
    type: "fill",
    question:
      "Biết $\\int_1^2 \\frac{1}{x(x+1)} dx = a\\ln 2 + b\\ln 3$ với $a, b \\in \\mathbb{Z}$. Tính $a + b$.",
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
      "Xếp ngẫu nhiên 5 học sinh nam và 5 học sinh nữ thành một hàng ngang. Tính xác suất để nam nữ đứng xen kẽ nhau (nhập dạng phân số tối giản $a/b$).",
    options: [],
    correctAnswer: "1/126",
    explanation:
      "Số phần tử không gian mẫu $n(\\Omega) = 10!$. Để nam và nữ đứng xen kẽ có 2 trường hợp: TH1 (Nam - Nữ - Nam...): $5! \\times 5!$, TH2 (Nữ - Nam - Nữ...): $5! \\times 5!$. Xác suất $P = \\frac{2 \\times 5! \\times 5!}{10!} = \\frac{2 \\times 120 \\times 120}{3628800} = \\frac{1}{126}$.",
    image: null,
  },
];
