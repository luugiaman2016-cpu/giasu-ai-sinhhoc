import { Topic } from '../types';

// ==================== TOPIC 1: MENDEL ====================
export const topic1: Topic = {
  id: 'mendel', name: '📗 Định luật Mendel & Mở rộng',
  description: 'Quy luật phân li, phân li độc lập, trội lặn, đa alen, tương tác gen',
  color: 'from-emerald-500 to-teal-600', icon: '🧬',
  subSkills: [
    {
      id: 'sk-ratioGT', title: 'Kỹ năng 1: Xác định tỉ lệ giao tử',
      description: 'Từ kiểu gen → xác định các loại giao tử và tỉ lệ',
      questions: [
        { id:'sk1-1', type:'multiple', question:'Cơ thể AaBb (gen phân li độc lập) tạo ra mấy loại giao tử?',
          options:[{letter:'A',text:'2 loại'},{letter:'B',text:'4 loại'},{letter:'C',text:'8 loại'},{letter:'D',text:'16 loại'}],
          correctAnswer:'B', explanations:{A:'Sai. AaBb cho 4 loại: AB, Ab, aB, ab.',B:'✓ Đúng! AaBb → 4 loại giao tử: AB=Ab=aB=ab=25%',C:'Sai. 8 loại cần 3 cặp dị hợp.',D:'Sai. 16 loại cần 4 cặp dị hợp.'} },
        { id:'sk1-2', type:'multiple', question:'Cơ thể AABb tạo ra mấy loại giao tử?',
          options:[{letter:'A',text:'1 loại'},{letter:'B',text:'2 loại'},{letter:'C',text:'4 loại'},{letter:'D',text:'3 loại'}],
          correctAnswer:'B', explanations:{A:'Sai. AABb cho 2 loại do cặp Bb cho 2 giao tử B và b.',B:'✓ Đúng! AABb → 2 loại giao tử: AB (50%) và Ab (50%).',C:'Sai. AA chỉ cho 1 loại giao tử A.',D:'Sai.'} },
        { id:'sk1-3', type:'multiple', question:'Cơ thể AaBb (phân li độc lập), tỉ lệ giao tử AB là bao nhiêu?',
          options:[{letter:'A',text:'50%'},{letter:'B',text:'25%'},{letter:'C',text:'12,5%'},{letter:'D',text:'75%'}],
          correctAnswer:'B', explanations:{A:'Sai. 50% là tỉ lệ của từng cặp riêng lẻ.',B:'✓ Đúng! P(A)=1/2 × P(B)=1/2 = 1/4 = 25%.',C:'Sai. 12,5% cần 3 cặp dị hợp.',D:'Sai.'} },
      ]
    },
    {
      id: 'sk-phenoRatio', title: 'Kỹ năng 2: Tính tỉ lệ kiểu hình F2',
      description: 'Từ phép lai → tính tỉ lệ kiểu hình (trội/lặn)',
      questions: [
        { id:'sk2-1', type:'multiple', question:'Phép lai AaBb × AaBb (phân li độc lập, trội lặn hoàn toàn). Tỉ lệ kiểu hình A-B- ở F1 là?',
          options:[{letter:'A',text:'9/16'},{letter:'B',text:'3/16'},{letter:'C',text:'1/16'},{letter:'D',text:'6/16'}],
          correctAnswer:'A', explanations:{A:'✓ Đúng! 9A-B- : 3A-bb : 3aaB- : 1aabb → 9/16.',B:'Sai. 3/16 là tỉ lệ A-bb hoặc aaB-.',C:'Sai. 1/16 là tỉ lệ aabb.',D:'Sai.'} },
        { id:'sk2-2', type:'multiple', question:'Phép lai Aa × Aa, tỉ lệ đồng hợp lặn (aa) ở F1 là?',
          options:[{letter:'A',text:'1/4'},{letter:'B',text:'1/2'},{letter:'C',text:'3/4'},{letter:'D',text:'1'}],
          correctAnswer:'A', explanations:{A:'✓ Đúng! Aa × Aa → 1/4 AA : 2/4 Aa : 1/4 aa.',B:'Sai. 1/2 là tỉ lệ của Aa (dị hợp).',C:'Sai. 3/4 là tỉ lệ kiểu hình trội (A-).',D:'Sai.'} },
        { id:'sk2-3', type:'multiple', question:'Phép lai AaBb × aabb. Tỉ lệ aabb ở F1 là?',
          options:[{letter:'A',text:'1/4'},{letter:'B',text:'1/2'},{letter:'C',text:'1/16'},{letter:'D',text:'3/4'}],
          correctAnswer:'A', explanations:{A:'✓ Đúng! Aa×aa → 1/2 aa; Bb×bb → 1/2 bb; → 1/2 × 1/2 = 1/4.',B:'Sai.',C:'Sai. 1/16 cần AaBb × AaBb.',D:'Sai.'} },
      ]
    },
    {
      id: 'sk-genoCount', title: 'Kỹ năng 3: Đếm số loại kiểu gen',
      description: 'Xác định số loại kiểu gen trong phép lai',
      questions: [
        { id:'sk3-1', type:'multiple', question:'Phép lai AaBb × AaBb cho bao nhiêu loại kiểu gen ở F1?',
          options:[{letter:'A',text:'4 loại'},{letter:'B',text:'6 loại'},{letter:'C',text:'9 loại'},{letter:'D',text:'16 loại'}],
          correctAnswer:'C', explanations:{A:'Sai.',B:'Sai.',C:'✓ Đúng! Aa×Aa → 3 KG; Bb×Bb → 3 KG; 3×3=9.',D:'Sai. 16 là số kiểu hợp tử.'} },
        { id:'sk3-2', type:'multiple', question:'Phép lai AABB × aabb → F1, F1 × F1 → F2. F2 có bao nhiêu loại kiểu gen?',
          options:[{letter:'A',text:'4'},{letter:'B',text:'6'},{letter:'C',text:'9'},{letter:'D',text:'3'}],
          correctAnswer:'C', explanations:{A:'Sai.',B:'Sai.',C:'✓ Đúng! F1 là AaBb. AaBb × AaBb → 9 kiểu gen.',D:'Sai.'} },
      ]
    }
  ],
  part1: [
    { id:'p1-1', type:'matching', title:'Ghép khái niệm Mendel', description:'Nối các khái niệm với định nghĩa',
      pairs:[{left:'Kiểu gen (Genotype)',right:'Thành phần alen của cơ thể (VD: Aa, BB)'},{left:'Kiểu hình (Phenotype)',right:'Biểu hiện ra bên ngoài (VD: hoa đỏ)'},{left:'Dị hợp tử (Heterozygous)',right:'Hai alen khác nhau tại một locus (VD: Aa)'},{left:'Đồng hợp tử (Homozygous)',right:'Hai alen giống nhau tại một locus (VD: AA, aa)'}],
      explanation:'Kiểu gen là bản chất di truyền bên trong. Kiểu hình là biểu hiện bên ngoài. Dị hợp tử (Aa) mang hai alen khác nhau. Đồng hợp tử (AA hoặc aa) mang hai alen giống nhau.' },
    { id:'p1-2', type:'fill-blank', title:'Hoàn thành định luật Mendel', description:'Điền vào chỗ trống',
      blanks:[{text:'Định luật _____ phát biểu: mỗi tính trạng do một cặp alen quy định, khi hình thành giao tử, các cặp alen phân li đồng đều',answer:'phân li',hint:'Tên định luật thứ nhất của Mendel'},{text:'Định luật _____ phát biểu: các cặp alen trên các cặp NST tương đồng khác nhau phân li độc lập khi tạo giao tử',answer:'phân li độc lập',hint:'Tên định luật thứ hai của Mendel'},{text:'Ở thế hệ F2 từ phép lai một cặp tính trạng, tỉ lệ kiểu hình là _____ trội : _____ lặn',answer:'3',hint:'Số cây trội'}],
      explanation:'Định luật Phân li: mỗi cặp alen tách nhau vào giao tử, mỗi giao tử chứa 1 alen. Định luật Phân li độc lập: các cặp alen trên cặp NST khác nhau phân li không phụ thuộc nhau. Tỉ lệ F2: 3 trội : 1 lặn.' },
    { id:'p1-3', type:'drag-drop', title:'Sắp xếp các bước thí nghiệm Mendel', description:'Kéo thả theo đúng thứ tự thực hiện',
      items:[{id:'1',text:'P: Chọn hai dòng thuần chủng khác biệt về 1 tính trạng'},{id:'2',text:'F1: Lai hai dòng thuần chủng → quan sát kiểu hình'},{id:'3',text:'F2: Tự thụ phấn F1 → đếm tỉ lệ kiểu hình'},{id:'4',text:'Phân tích thống kê → đưa ra kết luận'}],
      explanation:'Mendel: (1) Chọn vật liệu thuần chủng (2) Lai tạo F1, quan sát tính trạng trội (3) Cho F1 tự thụ → F2 tỉ lệ 3:1 (4) Từ số liệu → định luật di truyền.' },
    { id:'p1-4', type:'fill-blank', title:'Tỉ lệ kiểu gen và kiểu hình', description:'Điền tỉ lệ chính xác',
      blanks:[{text:'Phép lai Aa × Aa: tỉ lệ kiểu gen là ___ AA : ___ Aa : ___ aa',answer:'1',hint:'Hệ số trước AA'},{text:'Phép lai Aa × Aa: tỉ lệ kiểu hình trội (A-) là ___/4',answer:'3',hint:'Số kiểu trội trong 4'},{text:'Phép lai AaBb × AaBb: tỉ lệ A-B- là ___/16',answer:'9',hint:'Tỉ lệ kiểu hình trội cả 2 tính trạng'}],
      explanation:'Aa × Aa → 1/4 AA : 2/4 Aa : 1/4 aa. Kiểu hình trội A- = 3/4. AaBb × AaBb → F2 tỉ lệ 9:3:3:1, trong đó A-B- = 9/16.' },
    { id:'p1-5', type:'matching', title:'Ghép tính trạng với biểu hiện', description:'Nối cột trái và cột phải',
      pairs:[{left:'AA (đồng hợp trội)',right:'Biểu hiện kiểu hình trội'},{left:'Aa (dị hợp)',right:'Biểu hiện kiểu hình trội (nếu trội hoàn toàn)'},{left:'aa (đồng hợp lặn)',right:'Biểu hiện kiểu hình lặn'},{left:'Trội không hoàn toàn - Aa',right:'Biểu hiện kiểu hình trung gian'}],
      explanation:'Trội hoàn toàn: AA và Aa đều biểu hiện kiểu hình trội, aa biểu hiện lặn. Trội không hoàn toàn: AA, Aa, aa cho 3 kiểu hình khác nhau (ví dụ: hoa đỏ, hồng, trắng).' },
    { id:'p1-6', type:'subskill-mc', title:'[Kỹ năng] Số loại kiểu gen trong phép lai', description:'Tập kỹ năng xác định số loại kiểu gen',
      question:'AABB × AABb → F1. Số loại kiểu gen ở F1 là?',
      options:[{letter:'A',text:'1 loại'},{letter:'B',text:'2 loại'},{letter:'C',text:'3 loại'},{letter:'D',text:'4 loại'}],
      correctAnswer:'B', explanations:{A:'Sai.',B:'✓ Đúng! AA × AA = 1 KG; BB × Bb = 2 KG (BB và Bb); Tổng: 1×2=2.',C:'Sai.',D:'Sai.'},
      explanation:'Xét từng cặp gen: AA×AA → chỉ AA (1 loại). BB×Bb → BB và Bb (2 loại). Tổng: 1×2 = 2 loại kiểu gen.' },
    { id:'p1-7', type:'fill-blank', title:'Tương tác gen bổ sung', description:'Điền tỉ lệ kiểu hình đặc trưng',
      blanks:[{text:'Tương tác bổ sung (epistasis): khi có cả A và B → hoa đỏ; chỉ A hoặc chỉ B → hoa vàng; không có → hoa trắng. Tỉ lệ kiểu hình ở F2 là ___ đỏ : ___ vàng : ___ trắng',answer:'9',hint:'Tỉ lệ có cả A và B'},{text:'Ở tương tác cộng gộp (2 cặp gen bổ sung nhau): tỉ lệ F2 của nhóm có ít nhất 1 alen trội là ___/16',answer:'15',hint:'16 trừ đi số aabb'}],
      explanation:'Tương tác bổ sung 9:3:3:1 → gộp thành 9 đỏ: 3+3 vàng: 1 trắng. Tương tác cộng gộp "có ít nhất 1 alen trội": 15/16 (trừ đi 1/16 aabb).' },
    { id:'p1-8', type:'drag-drop', title:'Phân loại các loại tương tác gen', description:'Ghép loại tương tác với tỉ lệ kiểu hình F2',
      items:[{id:'1',text:'Phân li độc lập bình thường (2 cặp gen) → 9:3:3:1'},{id:'2',text:'Tương tác bổ sung (A+B=đặc biệt) → 9:3:3:1 → gộp 9:6:1 hoặc 9:7'},{id:'3',text:'Epistasis trội → 12:3:1'},{id:'4',text:'Epistasis lặn (aa át B) → 9:3:4'}],
      explanation:'Các tỉ lệ F2 đặc biệt: 9:7 (bổ sung cần cả A lẫn B), 9:6:1 (cộng gộp), 12:3:1 (epistasis trội A át B), 9:3:4 (epistasis lặn aa át B-).' },
    { id:'p1-9', type:'matching', title:'Ghép ví dụ với quy luật', description:'Nối ví dụ thực tế với quy luật Mendel',
      pairs:[{left:'Nhóm máu ABO (3 alen: IA, IB, i)',right:'Đa alen (multiple alleles)'},{left:'Hoa Hoa phấn: đỏ × trắng → hồng',right:'Trội không hoàn toàn'},{left:'Màu da người do nhiều gen quy định',right:'Gen đa hiệu (polygenic inheritance)'},{left:'Gen gây bệnh hồng cầu hình liềm',right:'Pleiotropy (một gen – nhiều tính trạng)'}],
      explanation:'Đa alen: nhiều alen cho 1 locus (nhóm máu ABO). Trội không hoàn toàn: dị hợp tử có KH trung gian. Polygenic: nhiều gen cộng gộp tạo phổ biến thiên liên tục. Pleiotropy: 1 gen ảnh hưởng nhiều tính trạng.' },
    { id:'p1-10', type:'subskill-mc', title:'[Kỹ năng] Xác định kiểu gen từ kiểu hình', description:'Suy ngược từ kiểu hình để xác định kiểu gen',
      question:'Ở cây hoa, hoa đỏ (A-) × hoa trắng (aa) → F1: 50% hoa đỏ, 50% hoa trắng. Kiểu gen của cây hoa đỏ là?',
      options:[{letter:'A',text:'AA'},{letter:'B',text:'Aa'},{letter:'C',text:'aa'},{letter:'D',text:'Không xác định được'}],
      correctAnswer:'B', explanations:{A:'Sai. Nếu là AA, lai với aa → 100% hoa đỏ, không có 50:50.',B:'✓ Đúng! Aa × aa → 1/2 Aa (đỏ) : 1/2 aa (trắng) = 50:50.',C:'Sai. aa là hoa trắng.',D:'Sai. Có thể xác định được là Aa.'},
      explanation:'Tỉ lệ 1:1 đặc trưng của lai phân tích (testcross): kiểu gen cây hoa đỏ là Aa. Nếu AA → 100% hoa đỏ.' },
    { id:'p1-11', type:'drag-drop', title:'Phân biệt kiểu gen thuần chủng', description:'Kéo thả các kiểu gen vào đúng nhóm',
      items:[
        {id:'1', text:'AABB'}, {id:'2', text:'aabb'}, {id:'3', text:'AAbb'}, {id:'4', text:'AaBb'}, {id:'5', text:'aaBB'}, {id:'6', text:'Aabb'}
      ],
      explanation:'Thuần chủng: AABB, aabb, AAbb, aaBB. Không thuần chủng (dị hợp): AaBb, Aabb.' 
    },
    { id:'p1-12', type:'matching', title:'Ghép phép lai với tỉ lệ kiểu gen đời con', description:'Nối phép lai ở cột trái với tỉ lệ tương ứng',
      pairs:[
        {left:'AA × AA', right:'100% AA'},
        {left:'AA × Aa', right:'1 AA : 1 Aa'},
        {left:'Aa × Aa', right:'1 AA : 2 Aa : 1 aa'},
        {left:'aa × aa', right:'100% aa'}
      ],
      explanation:'Đây là 4 phép lai cơ bản của Mendel. Việc nhớ các tỉ lệ này giúp giải nhanh các bài toán phân li độc lập.' 
    },
    { id:'p1-13', type:'fill-blank', title:'Điền khuyết về quy luật di truyền', description:'Hoàn thành câu sau',
      blanks:[
        {text:'Ở một loài động vật, alen A quy định lông đỏ trội hoàn toàn so với a quy định lông trắng. Kiểu gen AA làm hợp tử bị chết ở giai đoạn phôi. Phép lai Aa × Aa sẽ cho tỉ lệ kiểu hình ở đời con sống sót là ___ đỏ : 1 trắng.', answer:'2', hint:'Tỉ lệ ban đầu là 1AA : 2Aa : 1aa. AA bị chết thì còn lại gì?'}
      ],
      explanation:'Aa × Aa cho 1AA : 2Aa : 1aa. Do AA gây chết, nên đời con sống sót có tỉ lệ kiểu gen 2Aa : 1aa. Vì A trội hoàn toàn so với a nên Aa có kiểu hình lông đỏ, aa lông trắng. Tỉ lệ kiểu hình là 2 đỏ : 1 trắng.' 
    },
    { id:'p1-14', type:'fill-blank', title:'Phân li độc lập ở hoa giấy', description:'Xác định tỉ lệ kiểu hình',
      blanks:[
        {text:'Ở loài hoa giấy, A(cao) > a(thấp); BB(đỏ), Bb(hồng), bb(trắng). Phép lai P: AaBb × aaBb thu được F1 có kiểu hình thân thấp, hoa trắng chiếm tỉ lệ là ___ / 8.', answer:'1', hint:'Nhân tỉ lệ (aa) với tỉ lệ (bb)'}
      ],
      explanation:'Aa × aa -> 1/2 aa. Bb × Bb -> 1/4 bb. Tỉ lệ thấp trắng (aabb) = 1/2 × 1/4 = 1/8.' 
    },
    { id:'p1-15', type:'drag-drop', title:'Sắp xếp tỉ lệ kiểu hình F1', description:'Ghép phép lai với số loại kiểu hình',
      items:[
        {id:'1', text:'AaBb × AaBB -> 2 loại kiểu hình'},
        {id:'2', text:'AaBb × aaBb -> 4 loại kiểu hình'},
        {id:'3', text:'AAbb × aaBb -> 2 loại kiểu hình'},
        {id:'4', text:'AaBb × aabb -> 4 loại kiểu hình'}
      ],
      explanation:'Tính số loại kiểu hình bằng cách nhân số loại KH của từng cặp.' 
    }
  ],
  part2: [
    { id:'q1', type:'multiple', question:'Ai là người đầu tiên phát hiện ra quy luật di truyền cơ bản?', options:[{letter:'A',text:'Morgan'},{letter:'B',text:'Darwin'},{letter:'C',text:'Mendel'},{letter:'D',text:'Watson'}], correctAnswer:'C', explanations:{A:'Sai. Morgan phát hiện liên kết gen.',B:'Sai. Darwin đề xuất thuyết tiến hóa.',C:'✓ Đúng! Gregor Mendel (1866) phát hiện quy luật phân li và phân li độc lập.',D:'Sai. Watson cùng Crick phát hiện cấu trúc DNA.'} },
    { id:'q2', type:'multiple', question:'Phép lai AABB × AABb cho F1 có bao nhiêu loại kiểu gen?', options:[{letter:'A',text:'1'},{letter:'B',text:'2'},{letter:'C',text:'3'},{letter:'D',text:'4'}], correctAnswer:'B', explanations:{A:'Sai.',B:'✓ Đúng! AA×AA=1 KG; BB×Bb=2 KG; Tổng 1×2=2.',C:'Sai.',D:'Sai.'} },
    { id:'q3', type:'boolean', statement:'Phép lai AA × Aa cho đời con có tỉ lệ 1AA : 1Aa.', correct:true, explanation:'✓ Đúng! AA × Aa → 1/2 AA : 1/2 Aa.' },
    { id:'q4', type:'multiple', question:'Kiểu gen nào sau đây là kiểu gen không thuần chủng?', options:[{letter:'A',text:'aaBB'},{letter:'B',text:'aabb'},{letter:'C',text:'AaBb'},{letter:'D',text:'AAbb'}], correctAnswer:'C', explanations:{A:'Sai. aaBB thuần chủng.',B:'Sai. aabb thuần chủng.',C:'✓ Đúng! AaBb có hai cặp dị hợp → không thuần chủng.',D:'Sai. AAbb thuần chủng.'} },
    { id:'q5', type:'multiple', question:'Phép lai AaBbdd × AabbDD cho F1 có tỉ lệ kiểu gen là?', options:[{letter:'A',text:'2:2:1:1:1:1'},{letter:'B',text:'3:3:1:1'},{letter:'C',text:'1:1:1:1'},{letter:'D',text:'1:1'}], correctAnswer:'A', explanations:{A:'✓ Đúng! Aa×Aa→1AA:2Aa:1aa; Bb×bb→1Bb:1bb; dd×DD→1Dd. Tổ hợp cho 6 KG tỉ lệ 2:2:1:1:1:1.',B:'Sai.',C:'Sai.',D:'Sai.'} },
    { id:'q6', type:'boolean', statement:'Ở hoa giấy, BB quy định hoa đỏ, Bb quy định hoa hồng, bb quy định hoa trắng. Đây là ví dụ của trội không hoàn toàn.', correct:true, explanation:'✓ Đúng! Dị hợp tử Bb có kiểu hình trung gian (hoa hồng) giữa BB (đỏ) và bb (trắng) → trội không hoàn toàn.' },
    { id:'q7', type:'multiple', question:'Số loại kiểu gen tối đa do phép lai AaBb × AaBb (phân li độc lập) tạo ra là?', options:[{letter:'A',text:'4'},{letter:'B',text:'6'},{letter:'C',text:'9'},{letter:'D',text:'16'}], correctAnswer:'C', explanations:{A:'Sai.',B:'Sai.',C:'✓ Đúng! Aa×Aa→3 KG; Bb×Bb→3 KG; 3×3=9.',D:'Sai. 16 là số kiểu hợp tử.'} },
    { id:'q8', type:'short', question:'Phép lai AaBb × AaBb (phân li độc lập, trội lặn hoàn toàn). Tỉ lệ kiểu hình A-B- ở F1 là bao nhiêu phần 16?', acceptedAnswers:['9','9/16'], explanation:'AaBb × AaBb → F1: 9 A-B- : 3 A-bb : 3 aaB- : 1 aabb. Tỉ lệ A-B- = 9/16.', hints:['Nhân riêng từng cặp: 3/4 A- × 3/4 B-'] },
    { id:'q9', type:'multiple', question:'Cho cây P kiểu gen Aa tự thụ phấn được F1, F1 tự thụ phấn được F2. Tỉ lệ cây hoa đỏ ở F2 là bao nhiêu (biết A – đỏ trội hoàn toàn so với a – vàng, số cây con các cây F1 như nhau)?', options:[{letter:'A',text:'3/4'},{letter:'B',text:'5/8'},{letter:'C',text:'7/8'},{letter:'D',text:'5/6'}], correctAnswer:'B', explanations:{A:'Sai. 3/4 là F1.',B:'✓ Đúng! F1: 1/4 AA, 2/4 Aa, 1/4 aa. F2: AA tự thụ→100% đỏ; Aa tự thụ→3/4 đỏ; aa→0. Tỉ lệ đỏ = 1/4 + 2/4×3/4 = 5/8.',C:'Sai.',D:'Sai.'} },
    { id:'q10', type:'boolean', statement:'Ở một loài thực vật, khi trong kiểu gen có cả gen A và gen B thì hoa có màu đỏ. Nếu chỉ có A hoặc chỉ có B thì hoa màu vàng. Tỉ lệ F2 từ AaBb × AaBb là 9 đỏ : 6 vàng : 1 trắng.', correct:true, explanation:'✓ Đúng! Gộp lại từ 9:3:3:1 → 9 A-B- (đỏ) : 3 A-bb + 3 aaB- (vàng) : 1 aabb (trắng) = 9:6:1.' },
    { id:'q11', type:'multiple', question:'Cơ thể đực AaBbDdEe giảm phân tạo tinh trùng (không đột biến). Số loại tinh trùng tối đa tạo ra là?', options:[{letter:'A',text:'4'},{letter:'B',text:'8'},{letter:'C',text:'16'},{letter:'D',text:'32'}], correctAnswer:'C', explanations:{A:'Sai.',B:'Sai.',C:'✓ Đúng! 4 cặp dị hợp → 2⁴ = 16 loại giao tử.',D:'Sai.'} },
    { id:'q12', type:'multiple', question:'Một tế bào sinh tinh của AaBbDdEe giảm phân (không đột biến, không hoán vị). Số loại tinh trùng tạo ra từ 1 tế bào là?', options:[{letter:'A',text:'2'},{letter:'B',text:'4'},{letter:'C',text:'8'},{letter:'D',text:'16'}], correctAnswer:'A', explanations:{A:'✓ Đúng! 1 tế bào sinh tinh → 4 tinh trùng thuộc 2 loại tỉ lệ 1:1.',B:'Sai.',C:'Sai.',D:'Sai.'} },
    { id:'q13', type:'boolean', statement:'Phép lai Aa × Aa cho đời con có tỉ lệ 1AA:2Aa:1aa. Nếu AA gây chết phôi, tỉ lệ kiểu hình ở đời sống sẽ là 2 trội : 1 lặn.', correct:true, explanation:'✓ Đúng! Loại AA (chết) → còn lại 2Aa : 1aa. Aa biểu hiện trội → 2 trội : 1 lặn.' },
    { id:'q14', type:'multiple', question:'Trong phép lai hai cây thân cao, hoa đỏ (P), F1 thu được 801 cây cao đỏ và 799 cây thấp trắng. Cây P có kiểu gen gì?', options:[{letter:'A',text:'AABB'},{letter:'B',text:'AaBb (liên kết hoàn toàn AB/ab)'},{letter:'C',text:'AaBb (phân li độc lập)'},{letter:'D',text:'Aabb'}], correctAnswer:'B', explanations:{A:'Sai. AABB chỉ cho 1 kiểu hình.',B:'✓ Đúng! Tỉ lệ 1:1 đặc trưng của AB/ab × ab/ab (liên kết hoàn toàn, lai phân tích).',C:'Sai. Phân li độc lập → 4 loại KH.',D:'Sai.'} },
    { id:'q15', type:'short', question:'Phép lai P: AaBbdd × AabbDD. Theo lí thuyết, số loại kiểu gen ở F1 là bao nhiêu?', acceptedAnswers:['6','sáu'], explanation:'Aa×Aa→3 KG (AA,Aa,aa); Bb×bb→2 KG (Bb,bb); dd×DD→1 KG (Dd). Tổng: 3×2×1=6.', hints:['Xét từng cặp gen riêng lẻ'] },
    { id:'q16', type:'boolean', statement:'Phép lai AaBb × AaBb (phân li độc lập), tỉ lệ cây có kiểu hình trội về cả 2 tính trạng (A-B-) là 9/16.', correct:true, explanation:'✓ Đúng! A-=3/4; B-=3/4; A-B-= 3/4 × 3/4 = 9/16.' },
    { id:'q17', type:'multiple', question:'Ở một loài thực vật, A quy định thân cao trội so với a (thấp), B quy định hoa đỏ trội so với b (trắng). Phép lai AaBb × Aabb thu được F1 có bao nhiêu loại kiểu hình?', options:[{letter:'A',text:'2'},{letter:'B',text:'3'},{letter:'C',text:'4'},{letter:'D',text:'6'}], correctAnswer:'C', explanations:{A:'Sai.',B:'Sai.',C:'✓ Đúng! Aa×Aa→A-(cao) và aa(thấp); Bb×bb→Bb(đỏ) và bb(trắng). 2×2=4 kiểu hình.',D:'Sai.'} },
    { id:'q18', type:'multiple', question:'Phép lai AaBb × Aabb (phân li độc lập, trội hoàn toàn). Tỉ lệ kiểu gene ở F1 là?', options:[{letter:'A',text:'2:2:1:1:1:1'},{letter:'B',text:'1:2:1:1:2:1'},{letter:'C',text:'3:1:3:1'},{letter:'D',text:'1:1:1:1'}], correctAnswer:'A', explanations:{A:'✓ Đúng! Aa×Aa→1AA:2Aa:1aa; Bb×bb→1Bb:1bb. Tổ hợp: 6 KG tỉ lệ 2:2:1:1:1:1.',B:'Sai.',C:'Sai.',D:'Sai.'} },
    { id:'q19', type:'boolean', statement:'Số kiểu gen tối đa trong quần thể khi có 1 gen với 2 alen (A và a) nằm trên NST thường là 3 (AA, Aa, aa).', correct:true, explanation:'✓ Đúng! Với 2 alen, số kiểu gen = n(n+1)/2 = 2×3/2 = 3.' },
    { id:'q20', type:'multiple', question:'Phép lai Aabb × AaBB (phân li độc lập). Tỉ lệ kiểu hình A-B- ở F1 là?', options:[{letter:'A',text:'3/4'},{letter:'B',text:'1/2'},{letter:'C',text:'9/16'},{letter:'D',text:'1/4'}], correctAnswer:'B', explanations:{A:'Sai.',B:'✓ Đúng! Aa×Aa→3/4 A-; bb×BB→1/2 Bb(B-)và 0 bb nhưng Aabb×AaBB → Bb(100% B-). A-= Aa×Aa=3/4 × B-=bb×BB=1 → nhưng ta tính: Aa×Aa=1/2 Aa+1/4AA = 3/4A-; bb×BB=100%Bb. A-B- = 3/4.',C:'Sai.',D:'Sai.'} },
    { id:'q21', type:'short', question:'Cho biết quá trình giảm phân diễn ra bình thường. Theo lí thuyết, phép lai AABB × AABb cho đời con có bao nhiêu loại kiểu gene?', acceptedAnswers:['2', 'hai'], explanation:'Cặp AA × AA cho 1 loại kiểu gen (AA). Cặp BB × Bb cho 2 loại kiểu gen (BB, Bb). Tổng cộng: 1 × 2 = 2 loại.', hints:['Tính số loại kiểu gen cho từng cặp alen riêng biệt rồi nhân lại với nhau.'] },
    { id:'q22', type:'short', question:'Ở một loài thực vật, khi có cả gen A và B thì hoa màu đỏ. Chỉ có A hoặc B thì hoa màu vàng. Không có A và B thì hoa màu trắng. Kiểu gen của cây hoa đỏ thuần chủng là gì?', acceptedAnswers:['AABB'], explanation:'Hoa đỏ cần có cả alen A và alen B (A-B-). Cây thuần chủng phải đồng hợp tất cả các cặp gen, do đó kiểu gen là AABB.', hints:['Thuần chủng nghĩa là các cặp gen đều ở trạng thái đồng hợp tử.'] },
    { id:'q23', type:'multiple', question:'Một tế bào sinh tinh của cơ thể có kiểu gen AaBbDdee giảm phân tạo ra giao tử có 3 alen trội. Theo lí thuyết, loại giao tử chứa 3 alen trội chiếm tỉ lệ bao nhiêu?', options:[{letter:'A',text:'1'},{letter:'B',text:'1/2'},{letter:'C',text:'1/4'},{letter:'D',text:'1/8'}], correctAnswer:'A', explanations:{A:'✓ Đúng! 1 tế bào sinh tinh chỉ tạo ra tối đa 2 loại tinh trùng. Nếu nó đã tạo ra loại giao tử có 3 alen trội thì loại kia sẽ là loại đối lập. Do đề hỏi tỉ lệ trong số các giao tử TẠO RA từ MỘT tế bào ĐÃ CÓ giao tử 3 alen trội.',B:'Sai',C:'Sai.',D:'Sai.'} },
    { id:'q24', type:'short', question:'Phép lai P: AaBbdd × AabbDD thu được F1. Theo lí thuyết, ở F1 có tối đa bao nhiêu loại kiểu gen?', acceptedAnswers:['6', 'sáu'], explanation:'Tách ra từng phép lai: Aa × Aa -> 3 kiểu gen. Bb × bb -> 2 kiểu gen. dd × DD -> 1 kiểu gen (Dd). Số loại KG = 3 × 2 × 1 = 6.', hints:['Nhân số loại kiểu gen của từng phép lai 1 cặp tính trạng lại với nhau.'] },
    { id:'q25', type:'short', question:'Trong quá trình phân bào của cơ thể có kiểu gen AB/ab đã xảy ra hoán vị gen với tần số 30%. Các loại giao tử hoán vị (Ab và aB) chiếm tỉ lệ mỗi loại là bao nhiêu phần trăm?', acceptedAnswers:['15', '15%'], explanation:'Tần số hoán vị gen là f = 30%. Các giao tử hoán vị là Ab và aB, mỗi loại chiếm tỉ lệ f/2 = 30% / 2 = 15%.', hints:['Giao tử hoán vị có tỉ lệ bằng một nửa tần số hoán vị gen.'] }
  ]
};

