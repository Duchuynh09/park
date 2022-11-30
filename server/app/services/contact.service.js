const { ObjectId } = require("mongodb");
class ContactService {
  constructor(client, collection) {
    this.Contact = client.db("Contact").collection(collection);
  }
  // ==============user====================
  extractConactData(payload) {
    const contact = {
      name: payload.name,
      address: payload.address,
      phone: payload.phone,
      email: payload.email,
      password: payload.password,
    };
    // Remove undefined fields
    Object.keys(contact).forEach((key) => {
      contact[key] === undefined && delete contact[key];
    });
    return contact;
  }
  async create(payload) {
    const contact = this.extractConactData(payload);
    try {
      const result = await this.Contact.findOneAndUpdate(
        contact,
        { $set: { _id: new ObjectId() } },
        { returnDocument: "after", upsert: true }
      );
      console.log(result.value);
      return result.value;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id, payload) {
    try {
      const filter = {
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
      };
      const update = this.extractConactData(payload);
      const result = await this.Contact.findOneAndUpdate(
        filter,
        { $set: update },
        { returnDocument: "after" }
      );
      return result.value;
    } catch (error) {
      console.log("errr" + error);
    }
  }
  async findById(id) {
    return await this.Contact.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }
  async find(filter) {
    const cursor = await this.Contact.find(filter);
    return await cursor.toArray();
  }
  // ==============Area ====================
  extractConactAreaData(payload, parks) {
    parks.forEach((e) => {
      if (payload._id == e._id) {
        e.user = payload.user;
        e.rented = payload.rented;
      }
    });
    return parks;
  }
  async updateArea(id, payload) {
    const filter = {
      _id: id,
    };
    const Area = await this.Contact.findOne(filter);
    const update = this.extractConactAreaData(payload, Area.park);
    const result = await this.Contact.findOneAndUpdate(
      filter,
      { $set: { park: update } },
      { returnDocument: "after" }
    );
    console.log(result.value.park);
    return result.value;
  }
  async delete(id) {
    const result = await this.Contact.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
}
module.exports = ContactService;
