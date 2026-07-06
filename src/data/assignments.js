export const assignments = [
  {
    id: 1,
    baiTap: "Bài 1",
    title: "Quản lý tệp và thư mục trên hệ điều hành",
    icon: "🖥️",
    tags: ["Quản lý tệp", "Hệ điều hành", "Windows"],
    pdfLink: "https://drive.google.com/file/d/1AIs10nRm_6qc976LXKucHy-ANKL8cIR_/view?usp=drive_link",
    goal: "Nắm vững các thao tác cơ bản để quản lý tệp và thư mục trên hệ điều hành Windows, phục vụ việc tổ chức và lưu trữ dữ liệu học tập một cách khoa học.",
    summary: "Thực hành các thao tác với File Explorer: mở ổ đĩa, tạo và đổi tên thư mục/tệp tin, sao chép (copy–paste), di chuyển (cut–paste), xóa tệp vào Thùng rác, xóa vĩnh viễn và khôi phục tệp đã xóa. Trình bày dưới dạng hướng dẫn từng bước kèm ảnh chụp màn hình minh họa.",
    sections: [
      {
        title: "Mục tiêu bài tập",
        content: "Thao tác cơ bản với tệp tin và thư mục trên hệ điều hành Windows. Bài tập giúp sinh viên nắm vững các kỹ năng quản lý file, thư mục — nền tảng quan trọng trong học tập và làm việc với máy tính."
      },
      {
        title: "Các bước thực hiện",
        steps: [
          { step: "01", title: "Mở File Explorer", desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ." },
          { step: "02", title: "Truy cập ổ đĩa/thư mục", desc: "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents." },
          { step: "03", title: "Tạo thư mục mới", desc: "Nhấp chuột phải vào một khoảng trống → chọn New → Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter." },
          { step: "04", title: "Vào thư mục vừa tạo", desc: "Nhấp đúp vào thư mục ThucHanh_hotensinhvien vừa tạo để mở nó." },
          { step: "05", title: "Tạo tệp tin văn bản", desc: "Nhấp chuột phải vào khoảng trống → New → Text Document. Đặt tên là GhiChu.txt. Nhấn Enter." },
          { step: "06", title: "Đổi tên tệp tin", desc: "Nhấp chuột phải vào tệp GhiChu.txt → chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter." },
          { step: "07", title: "Tạo thư mục con", desc: "Trong thư mục ThucHanh_hotensinhvien, nhấp chuột phải → New → Folder. Đặt tên là TaiLieu." },
          { step: "08", title: "Sao chép tệp tin (Copy & Paste)", desc: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt → chọn Copy (hoặc Ctrl+C). Vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống → chọn Paste (Ctrl+V) để có một bản sao trong TaiLieu." },
          { step: "09", title: "Di chuyển tệp tin (Cut & Paste)", desc: "Quay lại thư mục gốc, tạo tệp mới DiChuyen.txt → chọn Cut (Ctrl+X). Vào thư mục TaiLieu → chọn Paste (Ctrl+V). Tệp gốc biến mất khỏi vị trí cũ, chỉ còn ở vị trí mới." },
          { step: "10", title: "Xóa tệp tin", desc: "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt → chọn Delete. Tệp được chuyển vào Thùng rác (Recycle Bin)." },
          { step: "11", title: "Xóa vĩnh viễn", desc: "Chọn tệp DiChuyen.txt, nhấn giữ Shift và nhấn Delete. Xác nhận cảnh báo để xóa vĩnh viễn, không qua Thùng rác." },
          { step: "12", title: "Khôi phục từ Thùng rác (Tùy chọn)", desc: "Mở Recycle Bin trên màn hình nền, tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải → chọn Restore để khôi phục về vị trí ban đầu." },
        ]
      },
      {
        title: "Kết quả đạt được",
        highlights: [
          { emoji: "✅", text: "Thành thạo thao tác tạo, đổi tên, sao chép, di chuyển và xóa tệp tin/thư mục, kể cả thư mục con lồng nhau" },
          { emoji: "✅", text: "Phân biệt rõ Copy–Paste (giữ bản gốc) và Cut–Paste (di chuyển, xóa bản gốc khỏi vị trí cũ)" },
          { emoji: "✅", text: "Hiểu sự khác biệt giữa xóa thông thường (Recycle Bin) và xóa vĩnh viễn (Shift+Delete)" },
          { emoji: "✅", text: "Biết cách khôi phục dữ liệu từ Thùng rác khi cần thiết" },
          { emoji: "✅", text: "Xây dựng thói quen quản lý tệp tin khoa học, ngăn nắp ngay từ năm nhất" },
        ]
      }
    ]
  },
  {
    id: 2,
    baiTap: "Bài 2",
    title: "Khai thác dữ liệu và thông tin",
    icon: "🔍",
    tags: ["Tìm kiếm", "Đánh giá nguồn", "Thông tin số"],
    pdfLink: "https://drive.google.com/file/d/1naw7mUskUDRUd7nyutyID7z9OR_RI0A5/view?usp=drive_link",
    goal: "Nắm vững kỹ năng tìm kiếm, đánh giá độ tin cậy nguồn thông tin và tổng hợp tài liệu tham khảo phục vụ một đề tài nghiên cứu cụ thể.",
    summary: "Xác định đề tài nghiên cứu (Du lịch cộng đồng tại Mai Châu dưới góc nhìn phát triển bền vững), tìm kiếm và phân loại các nguồn tài liệu (báo chí, tạp chí khoa học, luận án, luận văn, sách chuyên khảo). Lập bảng đánh giá độ tin cậy nguồn theo các tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn học thuật, tính cập nhật, ưu – nhược điểm và xếp hạng độ tin cậy; kèm danh mục tài liệu tham khảo chuẩn hóa.",
    sections: [
      {
        title: "Đề tài nghiên cứu",
        content: "Du lịch cộng đồng tại Mai Châu (Hòa Bình) dưới góc nhìn phát triển bền vững."
      },
      {
        title: "Phân loại nguồn tài liệu sử dụng",
        steps: [
          { step: "01", title: "Cổng thông tin & báo chí chính thống", desc: "Vietnamtourism.gov.vn (Tổng cục Du lịch Việt Nam), Báo Dân tộc & Miền núi — cung cấp tin tức, chính sách và thực trạng du lịch cập nhật." },
          { step: "02", title: "Tạp chí khoa học", desc: "Tạp chí Khoa học HNUE, Tạp chí Khoa học & Lâm nghiệp — nghiên cứu học thuật có trích dẫn, phương pháp khảo sát thực địa." },
          { step: "03", title: "Luận án, luận văn", desc: "Đại học Văn hóa Hà Nội, Đại học KHXH&NV — nghiên cứu chuyên sâu về văn hóa và tác động xã hội của du lịch." },
          { step: "04", title: "Sách chuyên khảo", desc: "NXB Khoa học Xã hội — cung cấp khung lý thuyết về khai thác tài nguyên văn hóa và phát triển du lịch bền vững." },
          { step: "05", title: "Đa dạng hóa nguồn", desc: "Kết hợp nguồn báo chí thời sự (cập nhật, thực tế) với nguồn học thuật (luận án, luận văn, tạp chí, sách) để đảm bảo cả tính thời sự lẫn chiều sâu nghiên cứu." },
        ]
      },
      {
        title: "5 Tiêu chí đánh giá nguồn tin",
        highlights: [
          { emoji: "👤", text: "Tác giả (Authority): Uy tín, chuyên môn của tác giả — nhà báo, nhà nghiên cứu" },
          { emoji: "🏛️", text: "Cơ quan xuất bản (Publisher): Độ tin cậy của tạp chí khoa học, nhà xuất bản hoặc cơ quan báo chí" },
          { emoji: "🔬", text: "Phương pháp (Methodology): Tính minh bạch, khoa học của phương pháp nghiên cứu/thu thập thông tin" },
          { emoji: "📊", text: "Trích dẫn (Citations): Có/không có trích dẫn học thuật, mức độ được tham chiếu" },
          { emoji: "📅", text: "Tính cập nhật (Currency): Năm xuất bản, mức độ phù hợp với bối cảnh hiện tại" },
        ]
      },
      {
        title: "Bảng đánh giá độ tin cậy nguồn",
        table: {
          headers: ["Tài liệu", "Phân loại nguồn", "Tác giả", "Cơ quan xuất bản", "Phương pháp NC", "Trích dẫn học thuật", "Tính cập nhật", "Ưu – nhược điểm", "Xếp hạng"],
          rows: [
            ["Bản Lác nhộn nhịp trở lại sau đại dịch (2022)", "Báo chí chính thống", "Hoàng Anh", "Tổng cục Du lịch VN", "Tổng hợp thực tế, phỏng vấn", "Không có", "2022 – khá mới", "Ưu: thông tin thực tế. Nhược: thiếu phân tích học thuật", "Trung bình"],
            ["Xã Hang Kia phát triển du lịch cộng đồng (2023)", "Báo chí chính thống", "Hoàng Anh", "Tổng cục Du lịch VN", "Tổng hợp, mô tả thực trạng", "Không có", "2023 – mới", "Ưu: phản ánh mô hình cụ thể. Nhược: thiếu chiều sâu nghiên cứu", "Trung bình"],
            ["Mai Châu – điểm đến hấp dẫn (2024)", "Báo chí", "Thanh Hải", "Báo Dân tộc & Miền núi", "Mô tả, tổng hợp thông tin", "Hạn chế", "2024 – rất mới", "Ưu: cập nhật, quảng bá du lịch. Nhược: tính học thuật thấp", "Trung bình"],
            ["Phát triển du lịch thành ngành mũi nhọn (2022)", "Báo chí chính thống", "Lê Huệ", "Tổng cục Du lịch VN", "Phân tích chính sách, thực trạng", "Không có", "2022", "Ưu: liên quan định hướng bền vững. Nhược: thiếu cơ sở lý thuyết", "Trung bình"],
            ["Đánh giá tiềm năng du lịch nông thôn Mai Châu (2025)", "Tạp chí khoa học", "Hoàng Thị Thu Hương và cộng sự", "Tạp chí Khoa học HNUE", "Phân tích, khảo sát thực địa", "Có", "2025 – rất mới", "Ưu: nghiên cứu cập nhật, PP rõ ràng. Nhược: phạm vi chủ yếu nông thôn", "Cao"],
            ["Tác động du lịch sinh thái tại Bản Lác (2018)", "Tạp chí khoa học", "Trần Thị Hương và cộng sự", "Khoa học & Lâm nghiệp", "Khảo sát thực địa, đánh giá môi trường – xã hội", "Có", "2018 – trung bình", "Ưu: dữ liệu thực địa cụ thể. Nhược: chưa cập nhật xu hướng mới", "Cao"],
            ["Biến đổi văn hóa người Thái (2017)", "Luận án tiến sĩ", "Nguyễn Thị Hồng Tâm", "ĐH Văn hóa Hà Nội", "Nghiên cứu dân tộc học, thực địa", "Cao", "2017", "Ưu: phân tích sâu về văn hóa, rất phù hợp đề tài. Nhược: tính cập nhật hạn chế", "Rất cao"],
            ["Khai thác tài nguyên văn hóa du lịch bền vững (2022)", "Sách chuyên khảo", "Đinh Trọng Thu", "NXB Khoa học Xã hội", "Phân tích lý thuyết và thực tiễn", "Đầy đủ", "2022", "Ưu: khung lý thuyết về du lịch bền vững. Nhược: không riêng Mai Châu", "Rất cao"],
            ["Tác động du lịch đến đời sống người Thái (2007)", "Luận văn thạc sĩ", "Nguyễn Thị Hồng Vân", "ĐH KHXH&NV", "Nghiên cứu thực địa", "Có", "2007 – khá cũ", "Ưu: dữ liệu thực tế về cộng đồng địa phương. Nhược: cập nhật thấp", "Cao"],
            ["Mai Châu nâng tầm du lịch (2025)", "Báo chí chính thống", "Minh Vũ", "Tổng cục Du lịch VN", "Tổng hợp, phân tích định hướng", "Không có", "2025 – rất mới", "Ưu: thông tin định hướng phát triển mới. Nhược: thiếu chiều sâu nghiên cứu", "Trung bình"],
          ]
        }
      },
      {
        title: "Danh mục tài liệu tham khảo",
        highlights: [
          { emoji: "📄", text: "Hoàng Anh (2022). Bản Lác (Mai Châu – Hòa Bình) nhộn nhịp trở lại sau đại dịch. vietnamtourism.gov.vn" },
          { emoji: "📄", text: "Hoàng Anh (2023). Hòa Bình: Xã Hang Kia – Mai Châu phát triển du lịch cộng đồng. vietnamtourism.gov.vn" },
          { emoji: "📄", text: "Thanh Hải (2024). Mai Châu – điểm đến \"Hấp dẫn – thân thiện – an toàn\". dantocmiennui.baotintuc.vn" },
          { emoji: "📄", text: "Lê Huệ (2022). Mai Châu (Hòa Bình): Phát triển du lịch trở thành ngành kinh tế mũi nhọn. vietnamtourism.gov.vn" },
          { emoji: "📄", text: "Hoàng Thị Thu Hương và cộng sự (2025). Đánh giá tiềm năng phát triển du lịch nông thôn ở huyện Mai Châu, tỉnh Hòa Bình. Tạp chí Khoa học HNUE, số 70, 120–129." },
          { emoji: "📄", text: "Trần Thị Hương và cộng sự (2018). Đánh giá tác động của hoạt động du lịch sinh thái tới môi trường tự nhiên và xã hội tại Bản Lác. Tạp chí Khoa học và Lâm nghiệp, số 1, 113–122." },
          { emoji: "📄", text: "Nguyễn Thị Hồng Tâm (2017). Biến đổi văn hóa của người Thái ở huyện Mai Châu trong phát triển du lịch. Luận án tiến sĩ, ĐH Văn hóa Hà Nội." },
          { emoji: "📄", text: "Đinh Trọng Thu (2022). Khai thác tài nguyên văn hóa để phát triển du lịch bền vững vùng Tây Bắc. NXB Khoa học Xã hội." },
          { emoji: "📄", text: "Nguyễn Thị Hồng Vân (2007). Tác động của du lịch đến đời sống văn hóa – xã hội của người Thái ở Mai Châu. Luận văn thạc sĩ, ĐH KHXH&NV." },
          { emoji: "📄", text: "Minh Vũ (2025). Hòa Bình: Huyện Mai Châu tìm cách nâng tầm du lịch. vietnamtourism.gov.vn" },
        ]
      },
      {
        title: "Kết quả",
        content: "Thu thập được 10 tài liệu tham khảo đa dạng loại hình: báo chí chính thống, tạp chí khoa học, luận án, luận văn và sách chuyên khảo, xếp hạng độ tin cậy từ Trung bình đến Rất cao. Kết luận: Kết hợp nguồn báo chí thời sự với nguồn học thuật chuyên sâu giúp dữ liệu vừa phản ánh thực trạng cập nhật, vừa đảm bảo cơ sở lý luận vững chắc cho đề tài nghiên cứu."
      }
    ]
  },
  {
    id: 3,
    baiTap: "Bài 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    icon: "🤖",
    tags: ["Trí tuệ nhân tạo", "AI", "Prompt Engineering"],
    pdfLink: "https://drive.google.com/file/d/18Z1Wza9XF3--D9L9gNe8V-xuXNS1vGA_/view?usp=drive_link",
    goal: "Có cái nhìn tổng quát về trí tuệ nhân tạo (AI) và rèn kỹ năng Prompt Engineering để khai thác hiệu quả các mô hình ngôn ngữ lớn trong học tập.",
    summary: "Thử nghiệm và đánh giá hiệu quả của 3 mức độ prompt (cơ bản – cải tiến – nâng cao) trên 3 tác vụ: tóm tắt tài liệu học thuật, giải thích khái niệm phức tạp, tạo bộ câu hỏi ôn tập. So sánh kết quả theo các tiêu chí độ rõ ràng, mức độ chi tiết, khả năng kiểm soát đầu ra; từ đó rút ra nguyên tắc viết prompt hiệu quả (role prompting, structured prompting, xác định đối tượng và định dạng đầu ra).",
    sections: [
      {
        title: "Mục tiêu bài tập",
        content: "Nghiên cứu và thực hành kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn như ChatGPT trong học tập. Qua việc thử nghiệm nhiều dạng prompt ở 3 cấp độ khác nhau trên các tác vụ học thuật, người học hiểu rõ cách đặt yêu cầu giúp AI tạo ra kết quả chính xác, đầy đủ và hữu ích hơn."
      },
      {
        title: "3 Cấp độ Prompt đã thử nghiệm",
        steps: [
          { step: "🔵", title: "Prompt Cơ bản", desc: "Câu lệnh ngắn gọn, thiếu ngữ cảnh → Đầu ra chung chung, ít chi tiết, chưa đáp ứng nhu cầu học thuật." },
          { step: "🟡", title: "Prompt Cải tiến", desc: "Bổ sung yêu cầu cụ thể về định dạng, độ dài, phân đoạn → Đầu ra rõ ràng, có cấu trúc, phù hợp hơn." },
          { step: "🟢", title: "Prompt Nâng cao", desc: "Áp dụng kỹ thuật phân vai (Role-play) + Chain-of-Thought → Đầu ra chuyên sâu, có chiều sâu học thuật, đạt chuẩn nghiên cứu." },
        ]
      },
      {
        title: "Các tác vụ thực nghiệm",
        highlights: [
          { emoji: "📄", text: "Tóm tắt tài liệu học thuật: So sánh 3 cấp độ prompt trên bài viết kỷ niệm 72 năm Chiến thắng Điện Biên Phủ (07/5/1954 – 07/5/2026)" },
          { emoji: "💡", text: "Giải thích khái niệm phức tạp: Giải thích Thuyết tương đối (Theory of Relativity) của Albert Einstein cho học sinh lớp 12" },
          { emoji: "📝", text: "Tạo bộ câu hỏi ôn tập: Bộ câu hỏi trắc nghiệm và tự luận môn Sinh học lớp 12 về chủ đề Di truyền học" },
        ]
      },
      {
        title: "Kết quả thử nghiệm theo từng tác vụ",
        table: {
          headers: ["Tác vụ", "Loại prompt", "Kết quả"],
          rows: [
            ["Tóm tắt tài liệu học thuật", "Cơ bản", "AI tạo bản tóm tắt ngắn nhưng thiếu chi tiết và chưa rõ ý chính."],
            ["Tóm tắt tài liệu học thuật", "Cải tiến", "Nội dung đầy đủ hơn, có cấu trúc và dễ đọc hơn."],
            ["Tóm tắt tài liệu học thuật", "Nâng cao", "Kết quả chi tiết, logic, trình bày chuyên nghiệp và phù hợp mục đích học tập."],
            ["Giải thích khái niệm phức tạp", "Cơ bản", "AI giải thích khá chung chung và khó hiểu với người mới học."],
            ["Giải thích khái niệm phức tạp", "Cải tiến", "Nội dung dễ hiểu hơn và có ví dụ minh họa."],
            ["Giải thích khái niệm phức tạp", "Nâng cao", "AI giải thích theo trình tự logic, có so sánh và câu hỏi củng cố kiến thức nên hiệu quả học tập cao hơn."],
            ["Tạo bộ câu hỏi ôn tập", "Cơ bản", "AI tạo câu hỏi quá chung và không đúng trọng tâm."],
            ["Tạo bộ câu hỏi ôn tập", "Cải tiến", "Bộ câu hỏi phù hợp hơn với chương trình học."],
            ["Tạo bộ câu hỏi ôn tập", "Nâng cao", "Câu hỏi đa dạng mức độ, có đáp án và giải thích rõ ràng, hỗ trợ ôn thi hiệu quả."],
          ]
        }
      },
      {
        title: "So sánh hiệu quả giữa các loại prompt",
        table: {
          headers: ["Tiêu chí", "Prompt cơ bản", "Prompt cải tiến", "Prompt nâng cao"],
          rows: [
            ["Độ rõ ràng", "Thấp", "Trung bình", "Cao"],
            ["Mức độ chi tiết", "Ít", "Khá đầy đủ", "Rất đầy đủ"],
            ["Chất lượng kết quả", "Chung chung", "Tốt", "Rất tốt"],
            ["Khả năng kiểm soát đầu ra", "Thấp", "Trung bình", "Cao"],
            ["Tính phù hợp học tập", "Chưa cao", "Tốt", "Rất tốt"],
          ]
        }
      },
      {
        title: "Nguyên tắc viết prompt hiệu quả",
        highlights: [
          { emoji: "✍️", text: "Viết yêu cầu rõ ràng, cụ thể — tránh viết quá ngắn hoặc mơ hồ" },
          { emoji: "🎯", text: "Chỉ rõ mục tiêu đầu ra — nêu số lượng, độ dài, định dạng, phong cách trình bày" },
          { emoji: "🧩", text: "Cung cấp ngữ cảnh — chủ đề, đối tượng, mục đích sử dụng" },
          { emoji: "🪜", text: "Sử dụng cấu trúc từng bước — giúp AI xử lý thông tin logic hơn thay vì trả lời chung chung" },
          { emoji: "🎭", text: "Kết hợp vai trò chuyên gia (Role Prompting) — giúp phản hồi chuyên sâu, tự nhiên và phù hợp ngữ cảnh hơn" },
        ]
      },
      {
        title: "Kết luận",
        content: "Prompt Engineering là kỹ năng tư duy hệ thống, không phải chỉ gõ lệnh. Chất lượng đầu ra của AI phụ thuộc trực tiếp vào chất lượng câu hỏi mà người dùng đặt ra — prompt càng rõ ràng, có cấu trúc và giàu ngữ cảnh thì kết quả càng chính xác, hữu ích. Đây là kỹ năng ngày càng quan trọng trong môi trường học tập và làm việc hiện đại, cần được rèn luyện thường xuyên."
      }
    ]
  },
  {
    id: 4,
    baiTap: "Bài 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    icon: "💬",
    tags: ["Giao tiếp số", "Teamwork", "Cộng tác"],
    pdfLink: "https://drive.google.com/file/d/1UrTfhjSRXM0hyz4SlJxyRN3taxabu6If/view?usp=drive_link",
    goal: " Phát triển kỹ năng sử dụng các công cụ cộng tác trực tuyến để quản lý công việc, soạn thảo tài liệu và giao tiếp nhóm hiệu quả trong một dự án thực tế.",
    summary: "Báo cáo cá nhân về việc ứng dụng 3 công cụ trong dự án nhóm: Trello (quản lý nhiệm vụ, tiến độ, gắn nhãn ưu tiên), Google Docs (soạn thảo cộng tác, bình luận góp ý, theo dõi lịch sử chỉnh sửa) và Discord (giao tiếp, họp nhóm trực tuyến). Trình bày quá trình sử dụng, nhiệm vụ cá nhân đảm nhận, hiệu quả từng công cụ, các thách thức gặp phải (đồng bộ thời gian, trùng lặp nội dung, quên deadline) và giải pháp khắc phục.",
    sections: [
      {
        title: "Giới thiệu dự án",
        content: "Trong quá trình thực hiện dự án nhóm (môn Nhập môn công nghệ số và trí tuệ nhân tạo, thời gian thực hiện: 1 tuần), tôi đã sử dụng 3 công cụ hợp tác trực tuyến chính: Trello (quản lý nhiệm vụ, tiến độ), Google Docs (soạn thảo tài liệu cộng tác) và Discord (trao đổi, giao tiếp nhóm) — chủ động quản lý nhiệm vụ cá nhân, cập nhật tiến độ thường xuyên, tương tác với các thành viên và lưu trữ tài liệu một cách khoa học."
      },
      {
        title: "Quá trình sử dụng & nhiệm vụ cá nhân",
        steps: [
          { step: "📋", title: "Trello — Quản lý dự án", desc: "Tạo danh sách công việc theo từng giai đoạn, nhận nhiệm vụ cá nhân có deadline cụ thể, gắn nhãn màu (label) phân loại mức độ ưu tiên. Nhiệm vụ đảm nhận: tìm kiếm tài liệu, thiết kế nội dung trình bày, tổng hợp ý kiến thành viên, kiểm tra & chỉnh sửa báo cáo cuối cùng. Cập nhật trạng thái ít nhất 3 lần/tuần." },
          { step: "📝", title: "Google Docs — Soạn thảo cộng tác", desc: "Cùng nhóm xây dựng nội dung báo cáo: viết phần được phân công, chỉnh sửa lỗi chính tả và định dạng, thêm nhận xét (comment) góp ý cho thành viên khác, theo dõi lịch sử chỉnh sửa. Đóng góp cá nhân: tổng quan chủ đề dự án, phân tích kết quả nghiên cứu, tổng hợp giải pháp và kết luận, hỗ trợ chỉnh sửa bố cục tài liệu." },
          { step: "💬", title: "Discord — Giao tiếp nhóm", desc: "Trao đổi công việc hằng ngày, họp nhóm trực tuyến, chia sẻ tài liệu và thông báo, hỗ trợ giải đáp thắc mắc. Chủ động nhắn tin trao đổi công việc, đưa ra ý kiến đóng góp, hỗ trợ giải quyết vấn đề phát sinh — tổng số lượt tương tác trong tuần đạt trên 10 lượt." },
        ]
      },
      {
        title: "Thách thức & Giải pháp",
        highlights: [
          { emoji: "⏰", text: "Khó đồng bộ thời gian làm việc: Lịch học các thành viên khác nhau → Họp online qua Discord vào buổi tối, thống nhất lịch cố định mỗi tuần" },
          { emoji: "📄", text: "Nội dung bị trùng lặp: Nhiều thành viên cùng chỉnh sửa Google Docs → Phân chia rõ từng phần nội dung, dùng comment trao đổi trước khi chỉnh sửa" },
          { emoji: "⏳", text: "Quên deadline công việc: Một số thành viên chưa theo dõi tiến độ thường xuyên → Dùng Trello đặt deadline và bật thông báo nhắc việc tự động" },
        ]
      },
      {
        title: "Đánh giá hiệu quả công cụ",
        table: {
          headers: ["Công cụ", "Ưu điểm", "Hạn chế"],
          rows: [
            ["Trello", "Quản lý nhiệm vụ rõ ràng, dễ theo dõi tiến độ", "Cần cập nhật thường xuyên"],
            ["Google Docs", "Chỉnh sửa cộng tác nhanh chóng", "Dễ bị lỗi định dạng khi nhiều người cùng sửa"],
            ["Discord", "Giao tiếp linh hoạt, hỗ trợ họp nhóm tốt", "Dễ bị loãng thông tin nếu quá nhiều tin nhắn"],
          ]
        }
      },
      {
        title: "Kết luận",
        content: "Qua quá trình thực hiện dự án, tôi đã học được cách sử dụng hiệu quả các công cụ hợp tác trực tuyến trong làm việc nhóm. Việc ứng dụng Trello, Google Docs và Discord giúp nâng cao khả năng quản lý công việc, giao tiếp và phối hợp với các thành viên khác. Đồng thời, tôi cũng cải thiện được kỹ năng quản lý thời gian, làm việc nhóm và xử lý vấn đề trong môi trường cộng tác trực tuyến — những kỹ năng quan trọng phục vụ cho học tập và công việc sau này."
      }
    ]
  },
  {
    id: 5,
    baiTap: "Bài 5",
    title: "Sáng tạo nội dung số",
    icon: "✨",
    tags: ["Nội dung số", "Thiết kế", "AI tạo sinh"],
    pdfLink: "https://drive.google.com/file/d/1VbWxGcLHJrOcelRrT0I23ll22RHZt49U/view?usp=drive_link",
    goal: " Phát triển kỹ năng sử dụng công cụ AI tạo sinh (văn bản, hình ảnh, thiết kế) để sản xuất nội dung số phục vụ mục đích truyền thông giáo dục.",
    summary: "Báo cáo quy trình thiết kế infographic \"Lợi ích của việc học tiếng Anh trong thời đại số\" bằng cách kết hợp 3 công cụ AI: ChatGPT (viết nội dung và slogan), DALL-E (tạo hình minh họa) và Canva AI (thiết kế bố cục hoàn chỉnh). Trình bày các prompt sử dụng, kết quả nhận được, chỉnh sửa cá nhân trên từng bước; so sánh ưu – nhược điểm của 3 công cụ và phân tích vai trò của AI cùng các vấn đề đạo đức cần lưu ý (bản quyền, minh bạch, phụ thuộc công nghệ).",
    sections: [
      {
        title: "Giới thiệu dự án",
        content: "Thiết kế infographic \"Lợi ích của việc học tiếng Anh trong thời đại số\" giúp học sinh, sinh viên hiểu rõ tầm quan trọng của tiếng Anh trong học tập, công việc và giao tiếp quốc tế. Đối tượng mục tiêu: học sinh THPT, sinh viên đại học và người mới học tiếng Anh. Sản phẩm cuối cùng là một infographic thiết kế trên Canva với nội dung ngắn gọn, hình ảnh trực quan và bố cục dễ hiểu."
      },
      {
        title: "Các công cụ AI sử dụng",
        table: {
          headers: ["Công cụ", "Loại AI", "Mục đích"],
          rows: [
            ["ChatGPT", "AI tạo văn bản", "Viết nội dung infographic"],
            ["DALL-E", "AI tạo hình ảnh", "Tạo hình minh họa"],
            ["Canva AI", "AI hỗ trợ thiết kế", "Thiết kế infographic hoàn chỉnh"],
          ]
        }
      },
      {
        title: "Quá trình sử dụng AI",
        steps: [
          { step: "01", title: "ChatGPT — Viết nội dung", desc: "Prompt: viết nội dung ngắn gọn cho infographic dành cho học sinh THPT. ChatGPT đề xuất 5 ý (mở rộng cơ hội nghề nghiệp, tiếp cận kiến thức toàn cầu, giao tiếp quốc tế, phát triển tư duy, tăng khả năng công nghệ) → rút gọn còn 5 lợi ích chính phù hợp infographic. Tiếp tục dùng prompt tạo slogan, chỉnh sửa thành \"Learn English – Open Your Future\" cho phù hợp đối tượng học sinh." },
          { step: "02", title: "DALL-E — Tạo hình ảnh", desc: "Prompt: minh họa hiện đại học sinh học tiếng Anh với công nghệ số, sách, laptop, biểu tượng giao tiếp toàn cầu, phong cách flat design, màu sắc tươi sáng. Kết quả gồm hình học sinh dùng laptop, biểu tượng quả địa cầu, sách & thiết bị công nghệ. Chỉnh sửa: cắt ảnh theo tỷ lệ phù hợp, loại bỏ chi tiết thừa, điều chỉnh độ sáng trước khi đưa vào Canva." },
          { step: "03", title: "Canva AI — Thiết kế layout", desc: "Prompt: thiết kế infographic giáo dục về lợi ích học tiếng Anh, tông màu xanh dương – vàng, có icon và bố cục hiện đại. Kết quả: bố cục 5 phần, màu sắc đồng bộ, biểu tượng minh họa phù hợp. Chỉnh sửa cá nhân: đổi font chữ, bổ sung slogan, sắp xếp lại vị trí hình ảnh, điều chỉnh khoảng cách giữa các mục." },
        ]
      },
      {
        title: "So sánh các công cụ AI",
        table: {
          headers: ["Công cụ", "Ưu điểm", "Hạn chế"],
          rows: [
            ["ChatGPT", "Tạo nội dung nhanh, văn phong rõ ràng, dễ chỉnh sửa", "Nội dung đôi khi khá chung chung, cần người dùng tinh chỉnh để phù hợp mục đích"],
            ["DALL-E", "Tạo hình ảnh sáng tạo, đẹp và đa dạng, tiết kiệm thời gian tìm ảnh", "Một số chi tiết chưa chính xác, chữ trong ảnh thường không đẹp"],
            ["Canva AI", "Thiết kế nhanh, bố cục chuyên nghiệp, dễ chỉnh sửa", "Thiết kế đôi khi giống mẫu có sẵn, cần điều chỉnh để tạo tính riêng biệt"],
          ]
        }
      },
      {
        title: "Vai trò của AI trong sáng tạo",
        content: "AI đóng vai trò như một trợ lý sáng tạo: ChatGPT hỗ trợ nội dung, DALL-E hỗ trợ hình ảnh, Canva AI hỗ trợ thiết kế — giúp tiết kiệm thời gian và mở rộng ý tưởng thay vì phải tự tìm kiếm thông tin hoặc thiết kế từ đầu. Tuy nhiên AI vẫn chưa thể hiểu hoàn toàn mục tiêu cụ thể của người dùng, nội dung đôi khi còn chung chung và hình ảnh chưa đúng như mong muốn, nên sự tham gia của con người vẫn là yếu tố quyết định chất lượng cuối cùng. Cần lưu ý các vấn đề đạo đức khi sử dụng AI như tính minh bạch, bản quyền hình ảnh, nguy cơ sao chép nội dung và sự phụ thuộc quá mức vào công nghệ."
      },
      {
        title: "Kết luận",
        content: "Việc sử dụng ChatGPT, DALL-E và Canva AI đã giúp hoàn thành infographic hiệu quả hơn. AI hỗ trợ mạnh mẽ trong việc tạo ý tưởng, nội dung và thiết kế, nhưng vẫn cần sự sáng tạo, đánh giá và chỉnh sửa của con người để tạo ra một sản phẩm có chất lượng và mang dấu ấn cá nhân."
      }
    ]
  },
  {
    id: 6,
    baiTap: "Bài 6",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    icon: "🔒",
    tags: ["Sử dụng AI có trách nhiệm", "Liêm chính học thuật", "Đạo đức số"],
    pdfLink: "https://drive.google.com/file/d/1aDibZd6cNgDXhXmz4z7CPCHnKPA5W9Vr/view?usp=drive_link",
    goal: "Nâng cao nhận thức về việc sử dụng AI có trách nhiệm và đạo đức trong học tập, nghiên cứu, dựa trên chính sách của nhà trường và trải nghiệm thực tế.",
    summary: "Tìm hiểu định hướng của ĐHQGHN về sử dụng AI trong học tập (AI là công cụ hỗ trợ chứ không thay thế tư duy, sinh viên chịu trách nhiệm nội dung, cần kiểm chứng thông tin). Thực hành viết đoạn văn học thuật tiếng Anh với ChatGPT, đánh giá – chỉnh sửa đầu ra và trích dẫn việc sử dụng AI đúng cách. Phân tích ranh giới giữa hỗ trợ hợp lý và gian lận học thuật, vấn đề sở hữu trí tuệ và tác động đến kỹ năng tư duy độc lập. Xây dựng bộ 7 nguyên tắc cá nhân về sử dụng AI có trách nhiệm và trình bày dưới dạng infographic.",
    sections: [
      {
        title: "Chính sách của trường về sử dụng AI",
        content: "Từ năm học 2025–2026, ĐHQGHN đưa học phần \"Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo\" trở thành môn bắt buộc với sinh viên năm nhất. ULIS thực hiện các định hướng chung của ĐHQGHN: khuyến khích sinh viên sử dụng AI hỗ trợ học tập nhưng xem AI là công cụ hỗ trợ chứ không thay thế tư duy; sinh viên phải chịu trách nhiệm toàn bộ nội dung học thuật nộp; thông tin do AI cung cấp cần được kiểm chứng; việc sử dụng AI phải tuân thủ nguyên tắc trung thực học thuật và đạo đức nghiên cứu; người học cần phát triển đồng thời năng lực số, tư duy phản biện và kỹ năng đánh giá thông tin."
      },
      {
        title: "Thực hành: Viết đoạn văn học thuật với AI",
        steps: [
          { step: "01", title: "Prompt sử dụng", desc: "Yêu cầu ChatGPT viết đoạn văn khoảng 150 từ bằng tiếng Anh về tầm quan trọng của việc học tiếng Anh đối với sinh viên đại học." },
          { step: "02", title: "Đánh giá đầu ra", desc: "Điểm mạnh: đúng chủ đề, ngữ pháp chính xác, dễ hiểu và mạch lạc. Điểm hạn chế: từ vựng còn đơn giản, thiếu dẫn chứng, chưa mang phong cách học thuật." },
          { step: "03", title: "Chỉnh sửa và hoàn thiện", desc: "Thay thế từ vựng cơ bản bằng từ học thuật, bổ sung lập luận về cơ hội nghề nghiệp, sử dụng cấu trúc câu phức, kiểm tra lại ngữ pháp và tính logic." },
          { step: "04", title: "Trích dẫn việc sử dụng AI", desc: "Ghi rõ: \"Một phần nội dung ban đầu được hỗ trợ bởi ChatGPT (OpenAI, truy cập ngày 25/06/2026). Tác giả đã đánh giá, chỉnh sửa và chịu trách nhiệm hoàn toàn đối với nội dung cuối cùng.\"" },
        ]
      },
      {
        title: "Hỗ trợ hợp lý (Khuyến khích ✅)",
        steps: [
          { step: "✓", title: "Gợi ý ý tưởng", desc: "Sử dụng AI để gợi ý ý tưởng, phác thảo cấu trúc bài viết ban đầu." },
          { step: "✓", title: "Tóm tắt tài liệu", desc: "Dùng AI hỗ trợ tóm tắt tài liệu tham khảo, tiết kiệm thời gian đọc hiểu." },
          { step: "✓", title: "Kiểm tra ngữ pháp", desc: "Sử dụng AI để kiểm tra ngữ pháp, chính tả và tối ưu hóa định dạng bài viết." },
          { step: "✓", title: "Hỗ trợ lập dàn ý", desc: "Dùng AI hỗ trợ lập dàn ý và định hướng nghiên cứu, không để AI làm thay toàn bộ nội dung." },
        ]
      },
      {
        title: "Gian lận học thuật (Nghiêm cấm ❌)",
        highlights: [
          { emoji: "❌", text: "Sao chép nguyên văn nội dung do AI tạo ra và nộp như sản phẩm cá nhân" },
          { emoji: "❌", text: "Yêu cầu AI viết toàn bộ bài luận mà không chỉnh sửa hay ghi nhận nguồn hỗ trợ — tương đương hành vi đạo văn" },
          { emoji: "❌", text: "Phụ thuộc hoàn toàn vào AI, không tự tư duy và sáng tạo" },
          { emoji: "❌", text: "Bỏ qua việc kiểm chứng thông tin, số liệu do AI cung cấp" },
        ]
      },
      {
        title: "Quyền sở hữu trí tuệ & Tác động đến kỹ năng",
        content: "Nội dung do AI tạo ra có thể tương đồng với tài liệu đã tồn tại, vì vậy sinh viên cần kiểm tra nguồn thông tin, trích dẫn tài liệu gốc, công khai việc sử dụng AI và không nhận toàn bộ sản phẩm của AI là công trình cá nhân. Bên cạnh đó, phụ thuộc quá mức vào AI có thể làm suy giảm kỹ năng tư duy phản biện, khả năng giải quyết vấn đề, kỹ năng viết học thuật và năng lực nghiên cứu độc lập — do đó AI nên đóng vai trò công cụ hỗ trợ thay vì thay thế hoàn toàn quá trình học tập của con người."
      },
      {
        title: "Bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm",
        highlights: [
          { emoji: "1️⃣", text: "Sử dụng AI như công cụ hỗ trợ, không thay thế tư duy cá nhân" },
          { emoji: "2️⃣", text: "Luôn kiểm tra tính chính xác của thông tin do AI cung cấp" },
          { emoji: "3️⃣", text: "Công khai và trích dẫn việc sử dụng AI khi cần thiết" },
          { emoji: "4️⃣", text: "Không sao chép nguyên văn nội dung AI để nộp bài" },
          { emoji: "5️⃣", text: "Tôn trọng quyền sở hữu trí tuệ và các quy định học thuật" },
          { emoji: "6️⃣", text: "Sử dụng AI để nâng cao kỹ năng học tập thay vì phụ thuộc vào nó" },
          { emoji: "7️⃣", text: "Chịu trách nhiệm hoàn toàn đối với sản phẩm học thuật cuối cùng" },
        ]
      }
    ]
  },
];