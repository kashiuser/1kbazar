// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const array = [
  {
    ID: "1",
    Job_Title: "Senior UX Designer",
    Department: "Sr UX Designer ",
    Location: "Delhi",
    Name: "Kumar Sangeetesh",
    Profile: "",
    Designation: "Senior Developer",
    Email: "support@1knetworks.com",
    PhoneNumber: "9874561230",
    Message: "",
    HomeBanner: "",
    RetailerBanner: "",
    BrandLogo: "",
    Questions: "",

  },
];
export default function handler(req, res) {
  console.log("from backend", req.body);
  array.push(req.body);
  res.status(200).json(array);
}
