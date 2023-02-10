const country = require("../models/job");

exports.getAllJobs = async (req, res, next) => {
  const data = await country.find();

  res.status(200).json({ status: 200, data: data });
};

exports.addJob = async (req, res, next) => {
  const body = req.body;
  let message = `Bad request`;
  let data = [];
  let status = "fail";
  let statusCode = 400;

  await country.create(body);

  statusCode = 200;
  status = "success";
  message = "Added succesfully";
  data = await country.find();

  res.status(statusCode).json({
    status: status,
    message: message,
    data: data,
  });
};

exports.deleteJob = async (req, res, next) => {
  const body = req.body;
  let message = `Bad request`;
  let data = [];
  let status = "fail";
  let statusCode = 400;

  const search = { _id: body._id };

  const find = await country.find(search);
  console.log(find);
  if (!body.link) {
  } else if (find.length === 0) {
    message = `${body.jobTitle} - ${nody.company} doesn't exist`;
  } else {
    await country.findOneAndRemove(search, body);

    statusCode = 200;
    status = "success";
    message = "deleted succesfully";
    data = await country.find();
  }

  res.status(statusCode).json({
    status: status,
    message: message,
    data: data,
  });
};

exports.updateJob = async (req, res, next) => {
  const body = req.body;
  let message = `Bad request`;
  let data = [];
  let status = "fail";
  let statusCode = 400;
  const search = { _id: body._id };

  const find = await country.find(search);
  if (!body.link) {
  } else if (find.length === 0) {
    statusCode = 404;
    message = `${body.jobTitle} - ${nody.company} doesnt exist in the database`;
  } else {
    await country.findOneAndUpdate(search, body);

    statusCode = 200;
    status = "success";
    message = "updated succesfully";
    data = await country.find();
  }

  res.status(statusCode).json({
    status: status,
    message: message,
    data: data,
  });
};
