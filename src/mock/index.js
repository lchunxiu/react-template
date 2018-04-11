import Mock from "mockjs";

const baseUrl = "http://localhost:8080/api";

Mock.setup({
  timeout: "200-600"
});

// 验证身份信息 post必须是小写，不然识别不了，坑
Mock.mock(/login/, "post", function(options) {
  console.log('mock in：',options)
  return {
    isok: true,
    authorization:
      "eyJhbGciOiJIUzUxMiJ9.eyJjcmVhdGVkIjoxNTIzNDE0MTc4MTUzLCJkaXNDb2RlIjoiMDAxIiwiZXhwIjoxNTIzNTAwNTc4LCJ1c2VySWQiOiIxIiwib3JnSWQiOiI4N2U3NTExZDUxNzU0ZGE2YTFhMDRkZTFiNGM2NjlmZiJ9.j2drxQl2-FG-M-zJBhmCOOauaXkyGl7XYThh6PdbI29PWlSnJPbFNqTV8MGa4l1NsEuX7L_fL0GvNimOdy3Xfg"
  };
});
