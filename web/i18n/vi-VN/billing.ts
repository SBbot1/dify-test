const translation = {
  currentPlan: "Kế hoạch Hiện tại",
  upgradeBtn: {
    plain: "Nâng cấp Kế hoạch",
    encourage: "Nâng cấp Ngay",
    encourageShort: "Nâng cấp",
  },
  viewBilling: "Quản lý thanh toán và đăng ký",
  buyPermissionDeniedTip:
    "Vui lòng liên hệ với quản trị viên doanh nghiệp của bạn để đăng ký",
  plansCommon: {
    title: "Chọn một kế hoạch phù hợp với bạn",
    yearlyTip: "Nhận 2 tháng miễn phí khi đăng ký hàng năm!",
    mostPopular: "Phổ biến nhất",
    planRange: {
      monthly: "Hàng tháng",
      yearly: "Hàng năm",
    },
    month: "tháng",
    year: "năm",
    save: "Tiết kiệm ",
    free: "Miễn phí",
    currentPlan: "Kế hoạch Hiện tại",
    contractSales: "Liên hệ bộ phận bán hàng",
    contractOwner: "Liên hệ quản lý nhóm",
    startForFree: "Bắt đầu miễn phí",
    getStartedWith: "Bắt đầu với ",
    contactSales: "Liên hệ Bán hàng",
    talkToSales: "Nói chuyện với Bộ phận Bán hàng",
    modelProviders: "Nhà cung cấp Mô hình",
    teamMembers: "Thành viên Nhóm",
    buildApps: "Xây dựng Ứng dụng",
    vectorSpace: "Không gian Vector",
    vectorSpaceBillingTooltip:
      "Mỗi 1MB có thể lưu trữ khoảng 1.2 triệu ký tự dữ liệu vector hóa (ước tính sử dụng OpenAI Embeddings, thay đổi tùy theo các mô hình).",
    vectorSpaceTooltip:
      "Không gian Vector là hệ thống bộ nhớ dài hạn cần thiết cho LLMs để hiểu dữ liệu của bạn.",
    documentsUploadQuota: "Hạn mức Tải lên Tài liệu",
    documentProcessingPriority: "Ưu tiên Xử lý Tài liệu",
    documentProcessingPriorityTip:
      "Để có ưu tiên xử lý tài liệu cao hơn, vui lòng nâng cấp kế hoạch của bạn.",
    documentProcessingPriorityUpgrade:
      "Xử lý nhiều dữ liệu với độ chính xác cao và tốc độ nhanh hơn.",
    priority: {
      standard: "Tiêu chuẩn",
      priority: "Ưu tiên",
      "top-priority": "Ưu tiên Cao nhất",
    },
    logsHistory: "Lịch sử Nhật ký",
    customTools: "Công cụ Tùy chỉnh",
    unavailable: "Không có sẵn",
    days: "ngày",
    unlimited: "Không giới hạn",
    support: "Hỗ trợ",
    supportItems: {
      communityForums: "Diễn đàn cộng đồng",
      emailSupport: "Hỗ trợ qua email",
      priorityEmail: "Hỗ trợ qua email & chat ưu tiên",
      logoChange: "Thay đổi Logo",
      SSOAuthentication: "Xác thực SSO",
      personalizedSupport: "Hỗ trợ cá nhân hóa",
      dedicatedAPISupport: "Hỗ trợ API dành riêng",
      customIntegration: "Tích hợp và hỗ trợ tùy chỉnh",
      ragAPIRequest: "Yêu cầu API RAG",
      bulkUpload: "Tải lên tài liệu hàng loạt",
      agentMode: "Chế độ Đại lý",
      workflow: "Quy trình làm việc",
    },
    comingSoon: "Sắp ra mắt",
    member: "Thành viên",
    memberAfter: "Thành viên",
    messageRequest: {
      title: "Số Lượng Tin Nhắn",
      tooltip:
        "Hạn mức triệu hồi tin nhắn cho các kế hoạch sử dụng mô hình OpenAI (ngoại trừ gpt4). Các tin nhắn vượt quá giới hạn sẽ sử dụng Khóa API OpenAI của bạn.",
    },
    annotatedResponse: {
      title: "Hạn Mức Quota Phản hồi Đã được Ghi chú",
      tooltip:
        "Chỉnh sửa và ghi chú thủ công các phản hồi cung cấp khả năng trả lời câu hỏi chất lượng cao có thể tùy chỉnh cho các ứng dụng. (Chỉ áp dụng trong các ứng dụng trò chuyện)",
    },
    ragAPIRequestTooltip:
      "Đề cập đến số lượng cuộc gọi API triệu hồi chỉ khả năng xử lý cơ sở kiến thức của Superbot.",
    receiptInfo:
      "Chỉ chủ nhóm và quản trị viên nhóm có thể đăng ký và xem thông tin thanh toán",
  },
  plans: {
    sandbox: {
      name: "Hộp Cát",
      description: "Thử nghiệm miễn phí 200 lần GPT",
      includesTitle: "Bao gồm:",
    },
    professional: {
      name: "Chuyên nghiệp",
      description:
        "Dành cho cá nhân và các nhóm nhỏ để mở khóa nhiều sức mạnh với giá cả phải chăng.",
      includesTitle: "Tất cả trong kế hoạch miễn phí, cộng thêm:",
    },
    team: {
      name: "Nhóm",
      description:
        "Hợp tác mà không giới hạn và tận hưởng hiệu suất hạng nhất.",
      includesTitle: "Tất cả trong kế hoạch Chuyên nghiệp, cộng thêm:",
    },
    enterprise: {
      name: "Doanh nghiệp",
      description:
        "Nhận toàn bộ khả năng và hỗ trợ cho các hệ thống quan trọng cho nhiệm vụ quy mô lớn.",
      includesTitle: "Tất cả trong kế hoạch Nhóm, cộng thêm:",
    },
  },
  vectorSpace: {
    fullTip: "Không gian Vector đã đầy.",
    fullSolution: "Nâng cấp kế hoạch của bạn để có thêm không gian.",
  },
  apps: {
    fullTipLine1: "Nâng cấp kế hoạch của bạn để",
    fullTipLine2: "xây dựng thêm ứng dụng.",
  },
  annotatedResponse: {
    fullTipLine1: "Nâng cấp kế hoạch của bạn để",
    fullTipLine2: "ghi chú thêm cuộc trò chuyện.",
    quotaTitle: "Hạn Mức Quota Phản hồi Đã được Ghi chú",
  },
};

export default translation;
