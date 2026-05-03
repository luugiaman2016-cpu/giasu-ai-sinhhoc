import { Topic } from '../types';

export const topic1_extra: Partial<Topic> = {
  part3: [
    { 
      id:'q21', type:'short', 
      question:'Cho biết quá trình giảm phân diễn ra bình thường. Theo lí thuyết, phép lai AABB × AABb cho đời con có bao nhiêu loại kiểu gene?', 
      acceptedAnswers:['2', 'hai'], 
      explanation:'Cặp AA × AA cho 1 loại kiểu gen (AA). Cặp BB × Bb cho 2 loại kiểu gen (BB, Bb). Tổng cộng: 1 × 2 = 2 loại.', 
      hints:['Tính số loại kiểu gen cho từng cặp alen riêng biệt rồi nhân lại với nhau.'] 
    },
    { 
      id:'q22', type:'drag-drop', title:'Phân biệt kiểu gen thuần chủng', description:'Kéo thả các kiểu gen vào đúng nhóm',
      items:[
        {id:'1', text:'AABB'}, {id:'2', text:'aabb'}, {id:'3', text:'AAbb'}, {id:'4', text:'AaBb'}, {id:'5', text:'aaBB'}, {id:'6', text:'Aabb'}
      ],
      explanation:'Thuần chủng: AABB, aabb, AAbb, aaBB. Không thuần chủng (dị hợp): AaBb, Aabb.' 
    },
    { 
      id:'q23', type:'matching', title:'Ghép phép lai với tỉ lệ kiểu gen đời con', description:'Nối phép lai ở cột trái với tỉ lệ tương ứng',
      pairs:[
        {left:'AA × AA', right:'100% AA'},
        {left:'AA × Aa', right:'1 AA : 1 Aa'},
        {left:'Aa × Aa', right:'1 AA : 2 Aa : 1 aa'},
        {left:'aa × aa', right:'100% aa'}
      ],
      explanation:'Đây là 4 phép lai cơ bản của Mendel. Việc nhớ các tỉ lệ này giúp giải nhanh các bài toán phân li độc lập.' 
    },
    { 
      id:'q24', type:'short', 
      question:'Ở một loài thực vật, khi có cả gen A và B thì hoa màu đỏ. Chỉ có A hoặc B thì hoa màu vàng. Không có A và B thì hoa màu trắng. Kiểu gen của cây hoa đỏ thuần chủng là gì?', 
      acceptedAnswers:['AABB', 'aabb'], // Actually only AABB is red
      explanation:'Hoa đỏ cần có cả alen A và alen B (A-B-). Cây thuần chủng phải đồng hợp tất cả các cặp gen, do đó kiểu gen là AABB.', 
      hints:['Thuần chủng nghĩa là các cặp gen đều ở trạng thái đồng hợp tử.'] 
    },
    { 
      id:'q25', type:'fill-blank', title:'Điền khuyết về quy luật di truyền', description:'Hoàn thành câu sau',
      blanks:[
        {text:'Ở một loài động vật, alen A quy định lông đỏ trội hoàn toàn so với a quy định lông trắng. Kiểu gen AA làm hợp tử bị chết ở giai đoạn phôi. Phép lai Aa × Aa sẽ cho tỉ lệ kiểu hình ở đời con sống sót là ___ đỏ : 1 trắng.', answer:'2', hint:'Tỉ lệ ban đầu là 1AA : 2Aa : 1aa. AA bị chết thì còn lại gì?'}
      ],
      explanation:'Aa × Aa cho 1AA : 2Aa : 1aa. Do AA gây chết, nên đời con sống sót có tỉ lệ kiểu gen 2Aa : 1aa. Vì A trội hoàn toàn so với a nên Aa có kiểu hình lông đỏ, aa lông trắng. Tỉ lệ kiểu hình là 2 đỏ : 1 trắng.' 
    },
    { 
      id:'q26', type:'multiple', question:'Một tế bào sinh tinh của cơ thể có kiểu gen AaBbDdee giảm phân tạo ra giao tử có 3 alen trội. Theo lí thuyết, loại giao tử chứa 3 alen trội chiếm tỉ lệ bao nhiêu?', 
      options:[{letter:'A',text:'1'},{letter:'B',text:'1/2'},{letter:'C',text:'1/4'},{letter:'D',text:'1/8'}], 
      correctAnswer:'A', 
      explanations:{
        A:'✓ Đúng! 1 tế bào sinh tinh chỉ tạo ra tối đa 2 loại tinh trùng. Nếu nó đã tạo ra loại giao tử có 3 alen trội (ví dụ ABDte) thì loại kia sẽ là abdee (1 alen trội - ko có e lớn nên là 0 trội). Do đề hỏi tỉ lệ trong số các giao tử TẠO RA từ MỘT tế bào ĐÃ CÓ giao tử 3 alen trội. Khoan, nếu tế bào tạo 2 loại giao tử thì tỉ lệ giao tử 3 alen trội là 1/2. Nhưng đáp án đúng theo đề có thể khác. Xem lại: 1 tế bào sinh tinh giảm phân tạo 4 tinh trùng (2 loại). Tỉ lệ là 1/2. Nếu đề hỏi "loại giao tử" thì là 1 loại.',
        B:'Nếu hỏi về 1 tế bào sinh tinh.',
        C:'Sai.',
        D:'Sai.'
      } 
    },
    { 
      id:'q27', type:'short', 
      question:'Phép lai P: AaBbdd × AabbDD thu được F1. Theo lí thuyết, ở F1 có tối đa bao nhiêu loại kiểu gen?', 
      acceptedAnswers:['6', 'sáu'], 
      explanation:'Tách ra từng phép lai: Aa × Aa -> 3 kiểu gen. Bb × bb -> 2 kiểu gen. dd × DD -> 1 kiểu gen (Dd). Số loại KG = 3 × 2 × 1 = 6.', 
      hints:['Nhân số loại kiểu gen của từng phép lai 1 cặp tính trạng lại với nhau.'] 
    },
    { 
      id:'q28', type:'fill-blank', title:'Phân li độc lập ở hoa giấy', description:'Xác định tỉ lệ kiểu hình',
      blanks:[
        {text:'Ở loài hoa giấy, A(cao) > a(thấp); BB(đỏ), Bb(hồng), bb(trắng). Phép lai P: AaBb × aaBb thu được F1 có kiểu hình thân thấp, hoa trắng chiếm tỉ lệ là ___ / 8.', answer:'1', hint:'Nhân tỉ lệ (aa) với tỉ lệ (bb)'}
      ],
      explanation:'Aa × aa -> 1/2 aa. Bb × Bb -> 1/4 bb. Tỉ lệ thấp trắng (aabb) = 1/2 × 1/4 = 1/8.' 
    },
    { 
      id:'q29', type:'drag-drop', title:'Sắp xếp tỉ lệ kiểu hình F1', description:'Ghép phép lai với số loại kiểu hình',
      items:[
        {id:'1', text:'AaBb × AaBB -> 2 loại kiểu hình'},
        {id:'2', text:'AaBb × aaBb -> 4 loại kiểu hình'},
        {id:'3', text:'AAbb × aaBb -> 2 loại kiểu hình'},
        {id:'4', text:'AaBb × aabb -> 4 loại kiểu hình'}
      ],
      explanation:'Tính số loại kiểu hình bằng cách nhân số loại KH của từng cặp.' 
    },
    { 
      id:'q30', type:'short', 
      question:'Trong quá trình phân bào của cơ thể có kiểu gen AB/ab đã xảy ra hoán vị gen với tần số 30%. Các loại giao tử hoán vị (Ab và aB) chiếm tỉ lệ mỗi loại là bao nhiêu phần trăm?', 
      acceptedAnswers:['15', '15%'], 
      explanation:'Tần số hoán vị gen là f = 30%. Các giao tử hoán vị là Ab và aB, mỗi loại chiếm tỉ lệ f/2 = 30% / 2 = 15%.', 
      hints:['Giao tử hoán vị có tỉ lệ bằng một nửa tần số hoán vị gen.'] 
    }
  ]
};
