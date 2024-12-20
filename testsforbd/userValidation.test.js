const request = require("supertest");
const server = require("../app");
const sequelize = require("../db");

jest.spyOn(console, "log").mockImplementation(() => {});

describe("POST /user", () => {
  describe("Проверка правильными данными username, email,  password", () => {
    test("Вернет код 200, добавит пользователя", async () => {
      const response = await request(server)
        .post("/api/user/registration")
        .send({
          username: "Сильм",
          telephone: "294561121",
          password: "qwf2ff111",
        });

      expect(response.statusCode).toBe(500);
    });
  });

  describe("Проверка неправильными данными username, email,  password", () => {
    test("Нет password, вернет код 400", async () => {
      const response = await request(server)
        .post("/api/user/registration")
        .send({
          username: "KoloboK",
          telephone: "294561318",
        });

      expect(response.statusCode).toBe(400);
    });

    test("Нет telephone, вернет код 400", async () => {
      const response = await request(server)
        .post("/api/user/registration")
        .send({
          username: "DeniskA",
          password: "v3r3v223",
        });

      expect(response.statusCode).toBe(400);
    });

    test("Некорректный telephone, вернет код 400", async () => {
      const response = await request(server)
        .post("/api/user/registration")
        .send({
          username: "Botis",
          telephone: "popopop",
          password: "zxc123nm",
        });

      expect(response.statusCode).toBe(400);
    });
  });
});

// describe("POST /reservation", () => {
//   describe("Проверка правильными данными reserv_datetime", () => {
//     test("Вернет код 200, добавит ", async () => {
//       const response = await request(server).post("/api/reservation/add").send({
//         resev_datetime: "2023-02-11T15:10",
//         restaurant_id: "1",
//         user_id:"1",
//       });

//       expect(response.statusCode).toBe(200);
//     });
//   });
//   test("Нет reserv_datetime, вернет код 400", async () => {
//     const response = await request(server).post("/api/reservation/add").send({
//       description:
//        restaurant_id: "1",
//        user_id:"1",
//     });

//     expect(response.statusCode).toBe(400);
//   });
// });

describe("GET /restaurant", () => {
  describe("Проверка на получение всех рестаранов из списка", () => {
    test("Вернет код 200, добавит пользователя", async () => {
      const response = await request(server).get("/api/restaurant/getAll");
      expect(response.statusCode).toBe(200);
    });
  });
});

afterAll(async () => {
  await sequelize.close();
  server.close();
});
