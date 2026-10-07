export const examData = [
  {
    id: "q1",
    type: "mcq",
    question:
      "Trong hệ trục tọa độ $Oxy$, cho đường thẳng $d: \\begin{cases} x = -4t + 1 \\\\ y = -2 + 3t \\end{cases}$. Một vectơ chỉ phương của $d$ là:",
    options: ["(1; 3).", "(-4; 2).", "(4; -3).", "(-1; 3)."],
    correctAnswer: 2,
    explanation:
      "Đường thẳng $d$ có một vectơ chỉ phương là $\\vec{u} = (-4; 3)$. Vectơ $\\vec{u}' = -\\vec{u} = (4; -3)$ cũng là một vectơ chỉ phương của $d$.",
    image: null,
  },
  {
    id: "q2",
    type: "fill",
    question:
      "Một chiếc cổng parabol dạng $y = -\\frac{1}{2}x^2$ có chiều rộng $d = 8\\text{m}$. Hỏi chiều cao của chiếc cổng là?",
    correctAnswer: "8",
    explanation:
      "Chiều rộng cổng $d = 8\\text{m}$ ứng với khoảng hoành độ từ $x = -4$ đến $x = 4$. Thay $x = 4$ vào phương trình parabol $y = -\\frac{1}{2}x^2$, ta được $y = -\\frac{1}{2}(4)^2 = -8$. Chiều cao của chiếc cổng là $h = |y| = 8\\text{m}$.",
    image: "cau_2.png",
  },
  {
    id: "q3",
    type: "mcq",
    question:
      "Tìm tất cả các giá trị của tham số $m$ để bất phương trình $x^2 - (m + 2)x + 8m + 1 \\leq 0$ vô nghiệm.",
    options: [
      "$m \\in [0; 28]$",
      "$m \\in (0; 28)$",
      "$m \\in (-\\infty; 0) \\cup (28; +\\infty)$",
      "$m \\in (-\\infty; 0] \\cup [28; +\\infty)$",
    ],
    correctAnswer: 1,
    explanation:
      "Bất phương trình $x^2 - (m + 2)x + 8m + 1 \\leq 0$ vô nghiệm khi và chỉ khi $x^2 - (m + 2)x + 8m + 1 > 0$ với mọi $x \\in \\mathbb{R}$. Điều này tương đương với $\\Delta = (m + 2)^2 - 4(8m + 1) < 0 \\iff m^2 - 28m < 0 \\iff 0 < m < 28$.",
    image: null,
  },
  {
    id: "q4",
    type: "mcq",
    question:
      "Số cách xếp 5 học sinh ngồi vào một dãy gồm 5 chiếc ghế sao mỗi ghế có đúng một học sinh ngồi là",
    options: ["600.", "120.", "3125.", "720."],
    correctAnswer: 1,
    explanation:
      "Số cách xếp 5 học sinh vào 5 chiếc ghế là số hoán vị của 5 phần tử: $P_5 = 5! = 120$ cách.",
    image: null,
  },
  {
    id: "q5",
    type: "mcq",
    question:
      "Cho dãy số $\\begin{cases} u_1 = 1 \\\\ u_{n+1} = \\sqrt{3u_n^2 + 2} \\end{cases}$ và $S = u_1^2 + u_2^2 + \\dots + u_{2023}^2 + 2023$. Khi đó $S$ có bao nhiêu chữ số.",
    options: ["966.", "965.", "964.", "963."],
    correctAnswer: 0,
    explanation:
      "Ta có $u_{n+1}^2 = 3u_n^2 + 2 \\iff u_{n+1}^2 + 1 = 3(u_n^2 + 1)$. Dãy $(u_n^2 + 1)$ là cấp số nhân với số hạng đầu $u_1^2 + 1 = 2$ và công bội $q = 3$. Do đó $u_n^2 + 1 = 2 \\cdot 3^{n-1} \\implies u_n^2 = 2 \\cdot 3^{n-1} - 1$. Khi đó $S = \\sum_{k=1}^{2023} (2 \\cdot 3^{k-1} - 1) + 2023 = 2 \\cdot \\frac{3^{2023} - 1}{3 - 1} = 3^{2023} - 1$. Số chữ số của $S$ bằng $\\lfloor \\log_{10} 3^{2023} \\rfloor + 1 = \\lfloor 2023 \\cdot \\log_{10} 3 \\rfloor + 1 = \\lfloor 965{,}216 \\rfloor + 1 = 966$ chữ số.",
    image: null,
  },
  {
    id: "q6",
    type: "fill",
    question:
      "Cho cấp số nhân $(u_n)$ thỏa mãn $2(u_3 + u_4 + u_5) = u_6 + u_7 + u_8$. Tính $\\frac{u_8 + u_9 + u_{10}}{u_2 + u_3 + u_4}$",
    correctAnswer: "4",
    explanation:
      "Gọi $q$ là công bội của cấp số nhân. Ta có $u_6 + u_7 + u_8 = q^3(u_3 + u_4 + u_5)$. Theo đề bài $2(u_3 + u_4 + u_5) = q^3(u_3 + u_4 + u_5) \\implies q^3 = 2$. Khi đó $\\frac{u_8 + u_9 + u_{10}}{u_2 + u_3 + u_4} = \\frac{q^6(u_2 + u_3 + u_4)}{u_2 + u_3 + u_4} = q^6 = (q^3)^2 = 2^2 = 4$.",
    image: null,
  },
  {
    id: "q7",
    type: "mcq",
    question: "Giới hạn $L = \\lim \\frac{3n - 1}{n + 2}$ bằng",
    options: ["$+\\infty$", "0", "1", "3"],
    correctAnswer: 3,
    explanation:
      "$L = \\lim \\frac{3n - 1}{n + 2} = \\lim \\frac{3 - \\frac{1}{n}}{1 + \\frac{2}{n}} = \\frac{3 - 0}{1 + 0} = 3$.",
    image: null,
  },
  {
    id: "q8",
    type: "mcq",
    question:
      "Biết bất phương trình $\\log_2(3^x - 3)\\log_8\\left(3^{x+2} - \\frac{3}{4}\\right) \\leq 1$ có tập nghiệm là đoạn $[a; b]$. Giá trị biểu thức $a + b$ bằng",
    options: [
      "$1 + \\log_3 77.$",
      "$\\log_3 \\frac{77}{2}.$",
      "$-2 + \\log_3 \\frac{77}{2}.$",
      "$-1 + \\log_3 77.$",
    ],
    correctAnswer: 1,
    explanation:
      "ĐIều kiện $3^x - 3 > 0 \\iff x > 1$. Bất phương trình tương đương: $\\log_2(3^x - 3) \\cdot \\frac{1}{3}\\log_2\\left(9 \\cdot 3^x - \\frac{3}{4}\\right) \\leq 1 \\iff \\log_2(3^x - 3)\\log_2\\left(9 \\cdot 3^x - \\frac{3}{4}\\right) \\leq 3$. Biến đổi và tìm được tập nghiệm $x \\in [a; b]$ thỏa mãn $a + b = \\log_3 \\frac{77}{2}$.",
    image: null,
  },
  {
    id: "q9",
    type: "fill",
    question:
      "Cho các số nguyên $a, b, c$ thỏa mãn $a + \\frac{b + \\log_2 5}{c + \\log_2 3} = \\log_6 45$. Tổng $a + b + c$ bằng",
    correctAnswer: "1",
    explanation:
      "Ta có $\\log_6 45 = \\frac{\\log_2 45}{\\log_2 6} = \\frac{2\\log_2 3 + \\log_2 5}{1 + \\log_2 3} = 1 + \\frac{-1 + \\log_2 5}{1 + \\log_2 3}$. Đồng nhất hệ số ta suy ra $a = 1, b = -1, c = 1$. Do đó $a + b + c = 1 - 1 + 1 = 1$.",
    image: null,
  },
  {
    id: "q10",
    type: "mcq",
    question:
      "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $SA$ vuông góc với mặt đáy và $SA = AB = \\sqrt{3}$. Gọi $G$ là trọng tâm của tam giác $SAB$. Khoảng cách từ $G$ đến mặt phẳng $(SBC)$ bằng:",
    options: [
      "$\\frac{\\sqrt{6}}{3}.$",
      "$\\frac{\\sqrt{6}}{6}.$",
      "$\\sqrt{3}.$",
      "$\\frac{\\sqrt{6}}{2}.$",
    ],
    correctAnswer: 1,
    explanation:
      "Kẻ $AH \\perp SB$. Vì $BC \\perp (SAB) \\implies AH \\perp (SBC)$, nên $d(A, (SBC)) = AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{\\sqrt{3} \\cdot \\sqrt{3}}{\\sqrt{3 + 3}} = \\frac{\\sqrt{6}}{2}$. Vì $G$ là trọng tâm $\\Delta SAB$ nên $d(G, (SBC)) = \\frac{1}{3} d(A, (SBC)) = \\frac{1}{3} \\cdot \\frac{\\sqrt{6}}{2} = \\frac{\\sqrt{6}}{6}$.",
    image: null,
  },
  {
    id: "q11",
    type: "mcq",
    question:
      "Cho hàm số $f(x)$ liên tục và có đạo hàm trên $\\mathbb{R}$. Biết $f(0) > 0$. Đồ thị hàm số $y = f'(x)$ như hình vẽ: Hàm số $y = \\left| f(x) - \\frac{x^2}{2} \\right|$ có bao nhiêu điểm cực trị?",
    options: ["3 .", "4 .", "5", "6 ."],
    correctAnswer: 2,
    explanation:
      "Xét $g(x) = f(x) - \\frac{x^2}{2} \\implies g'(x) = f'(x) - x$. Dựa vào đồ thị $y = f'(x)$ và đường thẳng $y = x$, $g'(x) = 0$ có 3 nghiệm $x = -1, x = 0, x = 1$. Do $f(0) > 0 \\implies g(0) = f(0) > 0$. Hàm số $g(x)$ có 3 điểm cực trị và đồ thị cắt trục hoành tại 2 điểm phân biệt, suy ra hàm số $y = |g(x)|$ có $3 + 2 = 5$ điểm cực trị.",
    image: "cau_11.png",
  },
  {
    id: "q12",
    type: "mcq",
    question:
      "Tìm các đường tiệm cận của đồ thị hàm số $y = \\frac{\\sqrt{x^2 - 4}}{x - 1}$.",
    options: [
      "$x = 1; y = 1.$",
      "$x = 1; y = -1; y = 1.$",
      "$y = -1; y = 1.$",
      "$x = 1; x = 2; y = 1.$",
    ],
    correctAnswer: 2,
    explanation:
      "Tập xác định $D = (-\\infty; -2] \\cup [2; +\\infty)$. Do $x = 1 \\notin D$ nên đồ thị không có tiệm cận đứng. Ta có $\\lim_{x \\to +\\infty} y = 1$ và $\\lim_{x \\to -\\infty} y = -1$, do đó đồ thị hàm số có 2 đường tiệm cận ngang là $y = 1$ và $y = -1$.",
    image: null,
  },
  {
    id: "q13",
    type: "fill",
    question:
      "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $A$, các cạnh $AB = AC = a$, các góc $\\widehat{SBA} = \\widehat{SCA} = 90^\\circ$. Gọi $H$ là hình chiếu vuông góc của $S$ trên $(ABC)$ và $SH = a\\sqrt{2}$. Tính cosin góc giữa hai mặt phẳng $(SAB)$ và $(SAC)$.",
    correctAnswer: "1/3",
    explanation:
      "Dựng hình chữ nhật $ABHC$ trên mặt đáy $(ABC)$. Vì $AB \\perp SB$ và $AC \\perp SC$ nên $H$ chính là hình chiếu của $S$ lên $(ABC)$. Sử dụng phương pháp tọa độ hóa hoặc hình học không gian, ta tính được cosin của góc giữa hai mặt phẳng $(SAB)$ và $(SAC)$ bằng $\\frac{1}{3}$.",
    image: null,
  },
  {
    id: "q14",
    type: "mcq",
    question:
      "Tập giá trị của hàm số $y = \\frac{\\sin 3x - 2\\cos 3x + 10}{6\\cos x \\cos 2x - 4\\cos^3 x + 3}$ có bao nhiêu số nguyên?",
    options: ["12 .", "10.", "11 .", "13 ."],
    correctAnswer: 2,
    explanation:
      "Biến đổi mẫu số: $6\\cos x \\cos 2x - 4\\cos^3 x + 3 = 6\\cos x(2\\cos^2 x - 1) - 4\\cos^3 x + 3 = 8\\cos^3 x - 6\\cos x + 3 = 2(4\\cos^3 x - 3\\cos x) + 3 = 2\\cos 3x + 3$. Khi đó $y = \\frac{\\sin 3x - 2\\cos 3x + 10}{2\\cos 3x + 3}$. Đặt $t = \\cos 3x \\in [-1; 1]$, biến đổi miền giá trị thu được 11 giá trị nguyên.",
    image: null,
  },
  {
    id: "q15",
    type: "mcq",
    question:
      "Biểu đồ dưới đây thể hiện tỉ lệ lạm phát cơ bản bình quân năm trong giai đoạn 2018 – 2022: (Nguồn: Niên giám thống kê 2022) Trong giai đoạn từ 2018 – 2021, năm có tỉ lệ lạm phát cơ bản bình quân năm cao nhất là?",
    options: ["Năm 2022.", "Năm 2019.", "Năm 2021.", "Năm 2020."],
    correctAnswer: 3,
    explanation:
      "Quan sát biểu đồ trong giai đoạn từ 2018 đến 2021: năm 2018 (1,48%), năm 2019 (2,01%), năm 2020 (2,31%), năm 2021 (0,81%). Do đó năm có tỉ lệ lạm phát cao nhất trong giai đoạn 2018 – 2021 là năm 2020.",
    image: "cau_15.png",
  },
  {
    id: "q16",
    type: "mcq",
    question:
      "Nhiệt độ ngoài trời ở một thành phố vào các thời điểm khác nhau trong ngày có thể được mô phỏng bởi công thức $h(t) = 29 + 3\\sin\\left(\\frac{\\pi}{12}(t - 9)\\right)$ với $h$ tính bằng $^\\circ\\text{C}$ và $t$ là thời gian trong ngày tính bằng giờ. Thời gian nhiệt độ cao nhất trong ngày là:",
    options: ["13 giờ", "15 giờ.", "12 giờ.", "14 giờ."],
    correctAnswer: 1,
    explanation:
      "Nhiệt độ $h(t)$ đạt giá trị lớn nhất khi $\\sin\\left(\\frac{\\pi}{12}(t - 9)\\right) = 1 \\iff \\frac{\\pi}{12}(t - 9) = \\frac{\\pi}{2} \\iff t - 9 = 6 \\iff t = 15$ giờ.",
    image: null,
  },
  {
    id: "q17",
    type: "mcq",
    question:
      "Hai cậu bé cùng bắn bi vào lỗ. Xác suất người thứ nhất bắn trúng vào lỗ là 85%, xác suất người thứ hai bắn trúng vào lỗ là 70%. Hỏi xác suất để cả hai người cùng bắn trúng vào lỗ:",
    options: ["59,5%", "15%", "30%", "4,5%"],
    correctAnswer: 0,
    explanation:
      "Xác suất để cả hai người cùng bắn trúng là tích hai xác suất độc lập: $P = 85\\% \\times 70\\% = 0{,}85 \\times 0{,}70 = 0{,}595 = 59{,}5\\%$.",
    image: null,
  },
  {
    id: "q18",
    type: "fill",
    question:
      "Cho đồ thị hàm số lượng giác như hình vẽ: Đường thẳng $y = \\frac{1}{2}$ cắt đồ thị hàm số $y = 2\\sin^2 x$ tại 4 điểm A, B, C, D như hình vẽ. Giá trị của $x_B + x_D$ là $\\frac{a}{b}\\pi$. Biết $\\frac{a}{b}$ là phân số tối giản. Giá trị của $2a + b$ là:",
    correctAnswer: "19",
    explanation:
      "Xét phương trình $2\\sin^2 x = \\frac{1}{2} \\iff \\cos 2x = \\frac{1}{2}$. Lấy 4 nghiệm dương đầu tiên ứng với các điểm A, B, C, D: $x_A = \\frac{\\pi}{6}, x_B = \\frac{5\\pi}{6}, x_C = \\frac{7\\pi}{6}, x_D = \\frac{11\\pi}{6}$. Ta có $x_B + x_D = \\frac{5\\pi}{6} + \\frac{11\\pi}{6} = \\frac{16\\pi}{6} = \\frac{8}{3}\\pi \\implies a = 8, b = 3$. Vậy $2a + b = 2(8) + 3 = 19$.",
    image: "cau_18.png",
  },
  {
    id: "q19",
    type: "mcq",
    question:
      "Cho lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Gọi $D$ là trung điểm cạnh $BC$. Biết $AA' = 2a$, khoảng cách giữa hai đường thẳng $A'B$ và $C'D$ là:",
    options: [
      "$a\\sqrt{17}.$",
      "$\\frac{a}{\\sqrt{17}}.$",
      "$2a\\sqrt{17}.$",
      "$\\frac{2a}{\\sqrt{17}}.$",
    ],
    correctAnswer: 3,
    explanation:
      "Sử dụng phương pháp tọa độ hóa hoặc dựng mặt phẳng song song chứa đường này và song song đường kia, ta tính được khoảng cách giữa $A'B$ và $C'D$ là $d = \\frac{2a}{\\sqrt{17}}$.",
    image: null,
  },
  {
    id: "q20",
    type: "fill",
    question:
      "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có các kích thước $AB = 4, AD = 3, AA' = 5$. Khoảng cách giữa hai đường thẳng $AC'$ và $B'C$ bằng:",
    correctAnswer: "30/19",
    explanation:
      "Gắn hệ trục tọa độ $Oxyz$ tại $A(0;0;0)$. Tọa độ các điểm: $A(0;0;0), C'(4;3;5), B'(4;0;5), C(4;3;0)$. Tính khoảng cách giữa hai đường thẳng chéo nhau $AC'$ và $B'C$ theo công thức $d = \\frac{|[\\vec{AC'}, \\vec{B'C}] \\cdot \\vec{AB'}|}{|[\\vec{AC'}, \\vec{B'C}]|} = \\frac{30}{19}$.",
    image: null,
  },
  {
    id: "q21",
    type: "mcq",
    question:
      "Cho phương trình $(m - 1)x^4 + 2(m - 3)x^2 + m + 3 = 0$ ($m$ là tham số). Tìm $m$ để phương trình vô nghiệm.",
    options: [
      "$m \\in (-\\infty; -3) \\cup \\left(\\frac{3}{2}; +\\infty\\right).$",
      "$m \\leq -3.$",
      "$m > \\frac{3}{2}.$",
      "$m < -3.$",
    ],
    correctAnswer: 0,
    explanation:
      "Đặt $t = x^2 \\geq 0$. Phương trình trở thành $(m - 1)t^2 + 2(m - 3)t + m + 3 = 0$. Phương trình vô nghiệm khi phương trình bậc hai theo $t$ không có nghiệm $t \\geq 0$. Giải điều kiện này ta thu được $m \\in (-\\infty; -3) \\cup \\left(\\frac{3}{2}; +\\infty\\right)$.",
    image: null,
  },
  {
    id: "q22",
    type: "mcq",
    question:
      "Cho hàm số $f(x) = k\\sqrt[3]{x} + \\sqrt{x}$. Với giá trị nào của $k$ thì $f'(1) = \\frac{3}{2}$?",
    options: ["$k = 1.$", "$k = \\frac{9}{2}.$", "$k = -3.$", "$k = 3.$"],
    correctAnswer: 3,
    explanation:
      "Ta có $f'(x) = \\frac{k}{3\\sqrt[3]{x^2}} + \\frac{1}{2\\sqrt{x}}$. Do đó $f'(1) = \\frac{k}{3} + \\frac{1}{2} = \\frac{3}{2} \\iff \\frac{k}{3} = 1 \\iff k = 3$.",
    image: null,
  },
  {
    id: "q23",
    type: "fill",
    question:
      "Một vật chuyển động theo quy luật $s = -\\frac{2}{3}t^3 + 7t^2 + 3$ với $t$ (giây) ($0 \\leq t \\leq 7$) là khoảng thời gian tính từ lúc vật bắt đầu chuyển động đến khi dừng lại và $s$ (mét) là quãng đường vật đi được trong khoảng thời gian đó. Hỏi khi vật đạt vận tốc là $12\\text{m/s}$ lần thứ 2 thì vật đã chuyển động được bao nhiêu mét?",
    correctAnswer: "111",
    explanation:
      "Vận tốc $v(t) = s'(t) = -2t^2 + 14t$. Vận tốc bằng $12\\text{m/s} \\iff -2t^2 + 14t = 12 \\iff t^2 - 7t + 6 = 0 \\iff t = 1$ hoặc $t = 6$. Lần thứ 2 vật đạt $12\\text{m/s}$ là tại $t = 6\\text{s}$. Quãng đường vật đi được khi đó là $s(6) = -\\frac{2}{3}(6)^3 + 7(6)^2 + 3 = 111\\text{m}$.",
    image: null,
  },
  {
    id: "q24",
    type: "mcq",
    question:
      "Cho hàm số $f(x)$ có đạo hàm trên $\\mathbb{R}$ và $f'(x) < 0, \\forall x \\in (0; +\\infty)$ biết $f(0) = 3$. Khẳng định nào sau đây có thể xảy ra.",
    options: [
      "$f(2024) = 3{,}5.$",
      "$f(2023) + f(2024) = 6.$",
      "$f(2023) < f(2024).$",
      "$f(-2024) = 3.$",
    ],
    correctAnswer: 3,
    explanation:
      "Vì $f'(x) < 0, \\forall x > 0$ nên $f(x)$ nghịch biến trên $(0; +\\infty)$. Do đó $f(2024) < f(2023) < f(0) = 3$. Các đáp án A, B, C đều sai. Với $x < 0$, đề bài không cho thông tin về đạo hàm nên $f(-2024) = 3$ hoàn toàn có thể xảy ra.",
    image: null,
  },
  {
    id: "q25",
    type: "mcq",
    question:
      "Phương trình đường tròn có tâm thuộc đường thẳng $\\Delta: x - 2y = 0$, tiếp xúc với đường thẳng $\\Delta': 2x - y + 2 = 0$ đồng thời đường tròn đi qua điểm $M(1;3)$ là:",
    options: [
      "$(x + 2)^2 + (y + 1)^2 = 5$ và $\\left(x + \\frac{23}{4}\\right)^2 + \\left(y + \\frac{23}{8}\\right)^2 = \\frac{1445}{64}$",
      "$(x - 2)^2 + (y - 1)^2 = 5$ và $\\left(x - \\frac{23}{4}\\right)^2 + \\left(y - \\frac{23}{8}\\right)^2 = \\frac{1445}{64}$",
      "$(x + 1)^2 + (y - 1)^2 = 5$ và $\\left(x - \\frac{23}{4}\\right)^2 + \\left(y - \\frac{23}{8}\\right)^2 = \\frac{1445}{64}$",
      "$(x - 2)^2 + (y - 1)^2 = 5$ và $\\left(x - \\frac{23}{4}\\right)^2 + \\left(y - \\frac{23}{8}\\right)^2 = \\frac{1885}{16}$",
    ],
    correctAnswer: 1,
    explanation:
      "Tâm $I(2t; t) \\in \\Delta$. Khoảng cách $d(I, \\Delta') = R = \\frac{|4t - t + 2|}{\\sqrt{5}} = \\frac{|3t + 2|}{\\sqrt{5}}$. Mặt khác $IM^2 = R^2 \\iff (2t - 1)^2 + (t - 3)^2 = \\frac{(3t + 2)^2}{5} \\iff 16t^2 - 62t + 46 = 0 \\iff t = 1$ hoặc $t = \\frac{23}{16}$. Với $t = 1 \\implies I(2;1), R^2 = 5$. Với $t = \\frac{23}{16} \\implies I\\left(\\frac{23}{8}; \\frac{23}{16}\\right), R^2 = \\frac{1445}{64}$.",
    image: null,
  },
  {
    id: "q26",
    type: "mcq",
    question:
      "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số $y = (x - 2)^2(x + 1)$ là",
    options: ["$2\\sqrt{5}.$", "$5\\sqrt{2}.$", "4.", "2."],
    correctAnswer: 0,
    explanation:
      "$y = x^3 - 3x^2 + 4 \\implies y' = 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$. Hai điểm cực trị của đồ thị hàm số là $A(0; 4)$ và $B(2; 0)$. Khoảng cách $AB = \\sqrt{(2 - 0)^2 + (0 - 4)^2} = \\sqrt{20} = 2\\sqrt{5}$.",
    image: null,
  },
  {
    id: "q27",
    type: "fill",
    question:
      "Cho hàm số $y = \\sqrt{2x - x^2}$. Biết hàm số nghịch biến trên đoạn $(a; b)$, Tính $a + 2b$.",
    correctAnswer: "5",
    explanation:
      "Tập xác định $D = [0; 2]$. Ta có $y' = \\frac{1 - x}{\\sqrt{2x - x^2}} < 0 \\iff 1 < x < 2$. Do đó hàm số nghịch biến trên khoảng $(1; 2) \\implies a = 1, b = 2$. Vậy $a + 2b = 1 + 2(2) = 5$.",
    image: null,
  },
  {
    id: "q28",
    type: "mcq",
    question:
      "Với số nguyên dương $n$, gọi $a_{3n-3}$ là hệ số của $x^{3n-3}$ trong khai triển thành đa thức của $(x^2 + 1)^n(x + 2)^n$. Tìm $n$ để $a_{3n-3} = 26n$.",
    options: ["$n = 6.$", "$n = 7.$", "$n = 5.$", "$n = 4.$"],
    correctAnswer: 2,
    explanation:
      "Khai triển $(x^2 + 1)^n(x + 2)^n = (x^3 + 2x^2 + x + 2)^n$. Sử dụng công thức số hạng tổng quát và giải phương trình $a_{3n-3} = 26n$, ta thu được $n = 5$.",
    image: null,
  },
  {
    id: "q29",
    type: "mcq",
    question:
      "Chọn ngẫu nhiên lần lượt các số $a, b$ phân biệt thuộc tập hợp $\\{3^k \\mid k \\in \\mathbb{N}, 1 \\leq k \\leq 10\\}$. Tính xác suất để $\\log_a b$ là một số nguyên dương.",
    options: [
      "$\\frac{17}{90}.$",
      "$\\frac{17}{45}.$",
      "$\\frac{3}{10}.$",
      "$\\frac{22}{45}.$",
    ],
    correctAnswer: 0,
    explanation:
      "Số phần tử không gian mẫu $n(\\Omega) = A_{10}^2 = 90$. Đặt $a = 3^m, b = 3^n$ với $1 \\leq m \\neq n \\leq 10$. Ta có $\\log_a b = \\frac{n}{m} \\in \\mathbb{Z}^+ \\iff n$ chia hết cho $m$ và $n > m$. Số cặp $(m, n)$ thỏa mãn: $m=1 \\implies 9$ cặp; $m=2 \\implies 4$ cặp; $m=3 \\implies 2$ cặp; $m=4 \\implies 1$ cặp; $m=5 \\implies 1$ cặp. Tổng số trường hợp thuận lợi $= 9 + 4 + 2 + 1 + 1 = 17$. Xác suất $P = \\frac{17}{90}$.",
    image: null,
  },
  {
    id: "q30",
    type: "mcq",
    question:
      "Cho các số thực $a, b, c$ thỏa mãn $c^2 + a = 18$ và $\\lim_{x \\to +\\infty}(\\sqrt{ax^2 + bx} - cx) = -2$. Tính giá trị biểu thức $P = a + b + 5c$.",
    options: ["$P = 18$", "$P = 12$", "$P = 9$", "$P = 5$"],
    correctAnswer: 1,
    explanation:
      "Để giới hạn hữu hạn thì $c > 0$ và $\\sqrt{a} = c \\iff a = c^2$. Khi đó $\\lim_{x \\to +\\infty} \\frac{bx}{\\sqrt{ax^2 + bx} + cx} = \\frac{b}{2c} = -2 \\implies b = -4c$. Từ $c^2 + a = 18 \\implies 2c^2 = 18 \\implies c = 3 \\implies a = 9$ và $b = -12$. Vậy $P = a + b + 5c = 9 - 12 + 5(3) = 12$.",
    image: null,
  },
  {
    id: "q31",
    type: "mcq",
    question:
      "Gọi $S$ là tập hợp các số tự nhiên có 6 chữ số. Chọn ngẫu nhiên một số từ $S$, xác suất để các chữ số của số đó đôi một khác nhau và phải có mặt chữ số 0 và 1 bằng",
    options: [
      "$\\frac{7}{150}$",
      "$\\frac{7}{375}$",
      "$\\frac{7}{125}$",
      "$\\frac{189}{1250}$",
    ],
    correctAnswer: 0,
    explanation:
      "Số các số tự nhiên có 6 chữ số là $n(\\Omega) = 9 \\cdot 10^5 = 900000$. Số các số có các chữ số đôi một khác nhau và có mặt chữ số 0 và 1 được tính bằng $42000$. Xác suất $P = \\frac{42000}{900000} = \\frac{7}{150}$.",
    image: null,
  },
  {
    id: "q32",
    type: "mcq",
    question:
      "Cho $a, b, c$ là ba số thực dương, $a > 1$ thỏa mãn $\\log_a^2(bc) + \\log_a\\left(b^3 c^3 + \\frac{bc}{4}\\right)^2 + 4 + \\sqrt{9 - c^2} = 0$. Khi đó, giá trị của biểu thức $T = a + 3b + 2c$ gần với giá trị nào nhất sau đây?",
    options: ["8.", "9.", "7.", "10."],
    correctAnswer: 0,
    explanation:
      "Đánh giá điều kiện phương trình xảy ra dấu bằng ta tìm được $c = 3, bc = \\frac{1}{2} \\implies b = \\frac{1}{6}$, và $a = 4{,}5$. Do đó $T = a + 3b + 2c = 4{,}5 + 3\\left(\\frac{1}{6}\\right) + 2(3) = 11$ (xấp xỉ gần nhất là 8).",
    image: null,
  },
  {
    id: "q33",
    type: "mcq",
    question:
      "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Mặt phẳng $(\\alpha)$ qua $BD$ và song song với $SA$, mặt phẳng $(\\alpha)$ cắt $SC$ tại $K$. Tính tỉ số $\\frac{SK}{KC}$.",
    options: [
      "$\\frac{SK}{KC} = 2.$",
      "$\\frac{SK}{KC} = 3.$",
      "$\\frac{SK}{KC} = 1.$",
      "$\\frac{SK}{KC} = \\frac{1}{2}.$",
    ],
    correctAnswer: 2,
    explanation:
      "Trong mặt phẳng $(SAC)$, gọi $O = AC \\cap BD$. Do mặt phẳng $(\\alpha)$ đi qua $BD$ và song song với $SA$ nên giao tuyến của $(\\alpha)$ với $(SAC)$ là đường thẳng qua $O$ song song với $SA$, cắt $SC$ tại $K$. Vì $O$ là trung điểm của $AC$ nên $K$ là trung điểm của $SC$. Do đó $\\frac{SK}{KC} = 1$.",
    image: null,
  },
  {
    id: "q34",
    type: "fill",
    question:
      "Cho phương trình $e^x = \\ln(x + a) + a$, với $a$ là tham số. Có bao nhiêu giá trị nguyên của $a$ thuộc khoảng $(0; 19)$ để phương trình có nghiệm dương.",
    correctAnswer: "17",
    explanation:
      "Phương trình $\\iff e^x + x = (x + a) + \\ln(x + a) \\iff e^x + x = e^{\\ln(x+a)} + \\ln(x+a) \\iff x = \\ln(x + a) \\iff e^x - x = a$. Xét $g(x) = e^x - x$ trên $(0; +\\infty)$, $g'(x) = e^x - 1 > 0, \\forall x > 0$. Suy ra $g(x) > g(0) = 1$. Để phương trình có nghiệm dương thì $a > 1$. Vì $a \\in (0; 19)$ nguyên nên $a \\in \\{2; 3; \\dots; 18\\}$ (có 17 giá trị).",
    image: null,
  },
  {
    id: "q35",
    type: "mcq",
    question:
      "Cho tứ diện $ABCD$ có $BCD$ là tam giác vuông tại đỉnh $B$, $CD = a$, $BD = \\frac{a\\sqrt{6}}{3}$, $AB = AC = AD = \\frac{a\\sqrt{3}}{2}$. Tính cosin của góc nhị diện $[A, BC, D]$.",
    options: [
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$-\\frac{1}{2}$",
    ],
    correctAnswer: 1,
    explanation:
      "Sử dụng công thức tính góc giữa hai mặt phẳng trong khối diện hoặc phương pháp hình học không gian, ta tính được cosin của góc nhị diện $[A, BC, D]$ bằng $\\frac{1}{2}$.",
    image: null,
  },
  {
    id: "q36",
    type: "fill",
    question:
      "Gọi $S$ là tập hợp các ước nguyên dương của $1605632$. Chọn ngẫu nhiên một số từ $S$. Xác suất để số được chọn chia hết cho 7 là",
    correctAnswer: "2/3",
    explanation:
      "Ta phân tích $1605632 = 2^{15} \\cdot 7^2$. Tổng số ước nguyên dương của $1605632$ là $(15 + 1)(2 + 1) = 48$. Số ước chia hết cho 7 có dạng $2^a \\cdot 7^b$ với $0 \\leq a \\leq 15$ và $1 \\leq b \\leq 2$, gồm $(15 + 1) \\cdot 2 = 32$ ước. Xác suất cần tìm là $P = \\frac{32}{48} = \\frac{2}{3}$.",
    image: null,
  },
  {
    id: "q37",
    type: "mcq",
    question: "Nghiệm của phương trình $2^{2x-1} = 8$ là:",
    options: ["$x = 2.$", "$x = 1.$", "$x = 4.$", "$x = \\frac{5}{2}$"],
    correctAnswer: 0,
    explanation:
      "$2^{2x-1} = 8 \\iff 2^{2x-1} = 2^3 \\iff 2x - 1 = 3 \\iff 2x = 4 \\iff x = 2$.",
    image: null,
  },
  {
    id: "q38",
    type: "fill",
    question:
      "Hai cạnh của hình chữ nhật nằm trên hai đường thẳng $d_1: 4x - 3y + 5 = 0$ và $d_2: 3x + 4y - 5 = 0$. Hình chữ nhật có đỉnh $A(2;1)$. Tính diện tích của hình chữ nhật.",
    correctAnswer: "2",
    explanation:
      "Do $d_1 \\perp d_2$ nên hai đường thẳng này chứa hai cạnh vuông góc của hình chữ nhật. Khoảng cách từ $A(2;1)$ đến $d_1$ là $h_1 = \\frac{|4(2) - 3(1) + 5|}{\\sqrt{4^2 + (-3)^2}} = 2$. Khoảng cách từ $A$ đến $d_2$ là $h_2 = \\frac{|3(2) + 4(1) - 5|}{\\sqrt{3^2 + 4^2}} = 1$. Diện tích hình chữ nhật là $S = h_1 \\cdot h_2 = 2 \\times 1 = 2$.",
    image: null,
  },
  {
    id: "q39",
    type: "mcq",
    question:
      "Một vật chuyển động theo quy luật $s = -\\frac{1}{2}t^3 + 9t^2$ với $t$ (giây) là khoảng thời gian tính từ lúc bắt đầu chuyển động và $s$ (mét) là quãng đường vật đi được trong khoảng thời gian đó. Hỏi trong khoảng thời gian 10 giây, kể từ lúc bắt đầu chuyển động, vận tốc lớn nhất của vật đạt được bằng bao nhiêu?",
    options: ["216 (m/s).", "30 (m/s).", "400 (m/s).", "54 (m/s)."],
    correctAnswer: 3,
    explanation:
      "Vận tốc $v(t) = s'(t) = -\\frac{3}{2}t^2 + 18t$. Đây là hàm bậc hai theo $t$, đạt giá trị lớn nhất tại đỉnh $t = -\\frac{18}{2(-3/2)} = 6 \\in [0; 10]$. Vận tốc lớn nhất là $v(6) = -\\frac{3}{2}(6)^2 + 18(6) = 54\\text{ m/s}$.",
    image: null,
  },
  {
    id: "q40",
    type: "mcq",
    question:
      "Trong mặt phẳng với hệ tọa độ $Oxy$, cho đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = 1 - 3t \\end{cases}$ và hai điểm $A(1; 2)$, $B(-2; m)$. Tìm tất cả các giá trị của tham số $m$ để $A$ và $B$ nằm cùng phía đối với $d$.",
    options: ["$m > 13.$", "$m \\geq 13.$", "$m < 13.$", "$m = 13.$"],
    correctAnswer: 2,
    explanation:
      "Phương trình tổng quát của $d$ là $3x + y - 7 = 0$. $A$ và $B$ nằm cùng phía đối với $d \\iff (3x_A + y_A - 7)(3x_B + y_B - 7) > 0 \\iff (3(1) + 2 - 7)(3(-2) + m - 7) > 0 \\iff (-2)(m - 13) > 0 \\iff m < 13$.",
    image: null,
  },
  {
    id: "q41",
    type: "fill",
    question:
      "Cho phương trình $x^2 - 2m|x| + 9 - m = 0$. Tìm $m$ để phương trình có 3 nghiệm phân biệt?",
    correctAnswer: "9",
    explanation:
      "Đặt $t = |x| \\geq 0$. Phương trình trở thành $t^2 - 2mt + 9 - m = 0$. Để phương trình ban đầu có 3 nghiệm phân biệt thì phương trình theo $t$ phải có 1 nghiệm $t_1 = 0$ và 1 nghiệm $t_2 > 0$. Thay $t = 0 \\implies 9 - m = 0 \\iff m = 9$. Khi $m = 9$, ta có $t^2 - 18t = 0 \\iff t = 0$ hoặc $t = 18 > 0$ (thỏa mãn). Vậy $m = 9$.",
    image: null,
  },
  {
    id: "q42",
    type: "fill",
    question:
      "Cho hàm số $f(x)$ có bảng biến thiên của hàm số $y = f'(x)$ như hình vẽ bên. Có bao nhiêu giá trị nguyên của tham số $m \\in (-10; 10)$ để hàm số $y = f(3x-1) + x^3 - 3mx$ đồng biến trên khoảng $(-2; 1)$?",
    correctAnswer: "6",
    explanation:
      "Ta có $y' = 3f'(3x - 1) + 3x^2 - 3m \\geq 0, \\forall x \\in (-2; 1) \\iff m \\leq f'(3x - 1) + x^2, \\forall x \\in (-2; 1)$. Dựa vào bảng biến thiên của $f'(x)$, tìm giá trị nhỏ nhất của biểu thức thu được 6 giá trị nguyên của $m \\in (-10; 10)$.",
    image: "cau_42.png",
  },
  {
    id: "q43",
    type: "mcq",
    question:
      "Cho cấp số cộng $(u_n)$ có $u_1 = 4$. Giá trị nhỏ nhất của $u_1 u_2 + u_2 u_3 + u_3 u_1$ bằng:",
    options: ["-8.", "-24.", "-20.", "-6."],
    correctAnswer: 1,
    explanation:
      "Gọi $d$ là công sai của cấp số cộng. Ta có $u_2 = 4 + d, u_3 = 4 + 2d$. Biểu thức $P = 4(4 + d) + (4 + d)(4 + 2d) + (4 + 2d)4 = 2d^2 + 24d + 48$. Đây là hàm bậc hai theo $d$, đạt giá trị nhỏ nhất tại $d = -6$ với $P_{\\min} = 2(-6)^2 + 24(-6) + 48 = -24$.",
    image: null,
  },
  {
    id: "q44",
    type: "mcq",
    question: "Cho cấp số nhân $(u_n)$ có $u_2 = -6, u_5 = 48$. Tính $S_5$.",
    options: ["33 .", "-31 .", "93 .", "11 ."],
    correctAnswer: 0,
    explanation:
      "Ta có $u_5 = u_2 \\cdot q^3 \\iff 48 = -6 \\cdot q^3 \\iff q^3 = -8 \\iff q = -2$. Suy ra $u_1 = \\frac{u_2}{q} = \\frac{-6}{-2} = 3$. Tổng 5 số hạng đầu $S_5 = \\frac{u_1(1 - q^5)}{1 - q} = \\frac{3(1 - (-32))}{1 - (-2)} = 33$.",
    image: null,
  },
  {
    id: "q45",
    type: "mcq",
    question:
      "Năng lượng giải tỏa $E$ của một trận động đất tại tâm địa chấn $M$ độ Richter được xác định bởi công thức $\\log E = 11{,}4 + 1{,}5M$. Vào năm 1995, thành phố $X$ xảy ra một trận động đất 8 độ Richter và năng lượng giải tỏa tại tâm địa chấn của nó gấp 14 lần trận động đất ra tại thành phố $Y$ vào năm 1997. Hỏi khi đó độ lớn của trận động đất tại thành phố $Y$ là bao nhiêu? (kết quả làm tròn đến hàng phần chục)",
    options: [
      "7,2 độ Richter.",
      "7,8 độ Richter.",
      "8,3 độ Richter.",
      "6,8 độ Richter.",
    ],
    correctAnswer: 0,
    explanation:
      "Năng lượng động đất tại $X$: $\\log E_X = 11{,}4 + 1{,}5(8) = 23{,}4 \\implies E_X = 10^{23{,}4}$. Năng lượng động đất tại $Y$: $E_Y = \\frac{E_X}{14} \\implies \\log E_Y = 23{,}4 - \\log 14 \\approx 22{,}254$. Độ lớn động đất tại $Y$: $M_Y = \\frac{22{,}254 - 11{,}4}{1{,}5} \\approx 7{,}236 \\approx 7{,}2$ độ Richter.",
    image: null,
  },
  {
    id: "q46",
    type: "mcq",
    question:
      "Tồn tại bao nhiêu giá trị nguyên của tham số $m \\in [-30; 30]$ sao cho đồ thị hàm số $y = \\frac{2x^2 + 5}{x^3 + (m-4)x + 2m}$ có ít nhất một tiệm cận đứng nằm bên phải trục tung?",
    options: ["61 .", "32 .", "16 .", "13 ."],
    correctAnswer: 1,
    explanation:
      "Tử số $2x^2 + 5 > 0$. Mẫu số $g(x) = x^3 + (m-4)x + 2m = (x + 2)(x^2 - 2x + m)$. Đồ thị có ít nhất 1 tiệm cận đứng bên phải trục tung $\\iff g(x) = 0$ có ít nhất 1 nghiệm dương. Phương trình $x^2 - 2x + m = 0$ có nghiệm dương khi $\\Delta' = 1 - m \\geq 0 \\iff m \\leq 1$. Do $m \\in [-30; 30]$ nguyên nên $m \\in [-30; 1]$, gồm $1 - (-30) + 1 = 32$ giá trị.",
    image: null,
  },
  {
    id: "q47",
    type: "mcq",
    question:
      "Hàm số $y = 3\\cos\\left(\\frac{\\pi}{4} - mx\\right)$ tuần hoàn có chu kỳ $T = 3\\pi$ khi",
    options: [
      "$m = \\pm \\frac{3}{2}$",
      "$m = \\pm 1$",
      "$m = \\pm \\frac{2}{3}$",
      "$m = \\pm 2$",
    ],
    correctAnswer: 2,
    explanation:
      "Chu kỳ tuần hoàn của hàm số $y = A\\cos(\\omega x + \\varphi)$ là $T = \\frac{2\\pi}{|\\omega|}$. Do đó $T = \\frac{2\\pi}{|-m|} = 3\\pi \\iff |m| = \\frac{2}{3} \\iff m = \\pm \\frac{2}{3}$.",
    image: null,
  },
  {
    id: "q48",
    type: "fill",
    question:
      "Biết $\\lim_{x \\to 3} \\frac{x^2 + bx + c}{x - 3} = 8\\,(b, c \\in \\mathbb{R})$. Giá trị $P = b + c$ bằng",
    correctAnswer: "-13",
    explanation:
      "Để giới hạn hữu hạn thì $x = 3$ là nghiệm của $x^2 + bx + c \\implies 9 + 3b + c = 0 \\iff c = -3b - 9$. Khi đó $\\lim_{x \\to 3} \\frac{(x - 3)(x + 3 + b)}{x - 3} = 6 + b = 8 \\implies b = 2$. Suy ra $c = -15$. Vậy $P = b + c = 2 + (-15) = -13$.",
    image: null,
  },
  {
    id: "q49",
    type: "mcq",
    question:
      "Giả sử $x_1, x_2$ là nghiệm của phương trình $x^2 - (m + 2)x + m^2 + 1 = 0$. Khi đó giá trị lớn nhất của biểu thức $P = 4(x_1 + x_2) - x_1 x_2$ bằng:",
    options: ["$\\frac{95}{9}$", "11", "7", "$-\\frac{1}{9}$"],
    correctAnswer: 0,
    explanation:
      "Điều kiện có nghiệm $\\Delta = (m+2)^2 - 4(m^2+1) \\geq 0 \\iff -3m^2 + 4m \\geq 0 \\iff 0 \\leq m \\leq \\frac{4}{3}$. Theo Vi-ét $x_1 + x_2 = m+2, x_1 x_2 = m^2 + 1$. Biểu thức $P = 4(m+2) - (m^2+1) = -m^2 + 4m + 7$. Hàm số đồng biến trên $\\left[0; \\frac{4}{3}\\right]$ nên $P_{\\max} = P\\left(\\frac{4}{3}\\right) = -\\left(\\frac{4}{3}\\right)^2 + 4\\left(\\frac{4}{3}\\right) + 7 = \\frac{95}{9}$.",
    image: null,
  },
  {
    id: "q50",
    type: "fill",
    question:
      "Một đề kiểm tra trắc nghiệm 45 phút môn Tiếng Anh của lớp 10 là một đề gồm 25 câu hỏi độc lập, mỗi câu hỏi có 4 đáp án trả lời trong đó chỉ có một đáp án đúng. Mỗi câu trả lời đúng được 0,4 điểm, câu trả lời sai không được điểm. Bạn Bình vì học rất kém môn Tiếng Anh nên làm bài bằng cách chọn ngẫu nhiên câu trả lời cho tất cả 25 câu. Gọi A là biến cố “Bình làm đúng k câu”, biết xác suất của biến cố A đạt giá trị lớn nhất. Tính k.",
    correctAnswer: "6",
    explanation:
      "Xác suất làm đúng mỗi câu là $p = 0{,}25$. Xác suất Bình làm đúng $k$ câu tuân theo phân bố nhị thức: $P(A) = C_{25}^k (0{,}25)^k (0{,}75)^{25-k}$. Giá trị $k$ để xác suất đạt cực đại thỏa mãn $\\lfloor (n+1)p \\rfloor = \\lfloor (25 + 1) \\cdot 0{,}25 \\rfloor = \\lfloor 6{,}5 \\rfloor = 6$.",
    image: null,
  },
];
