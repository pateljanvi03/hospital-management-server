const Joi = require("joi-oid");

const doctorPost = Joi.object({
  name: Joi.string().required(),
  hospital: Joi.objectId().required(),
  department: Joi.objectId().required(),
  address: Joi.string().required(),
  phone: Joi.number()
});

const doctorPut = Joi.object({
  name: Joi.string(),
  hospital: Joi.objectId(),
  department: Joi.objectId(),
  address: Joi.string(),
  phone: Joi.number()
});

const department = Joi.object({
  name: Joi.string().required(),
});

const hospital = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  branch: Joi.string().required(),
});

const patient = Joi.object({
  name: Joi.string().required(),
  patientNo: Joi.number(),
  age: Joi.number().required(),
  height: Joi.number(),
  weight: Joi.number(),
  address: Joi.string(),
  phone: Joi.number().min(10).max(10),
});

const patientAppinmentPost = Joi.object({
  hospital: Joi.objectId().required(),
  doctor: Joi.objectId().required(),
  timming: Joi.objectId().required(),
});

// const patientAppinmentPut = Joi.object({});

module.exports = {
  doctorPost,
  doctorPut,
  department,
  hospital,
  patient,
  patientAppinmentPost,

};
