import mongoose from "mongoose";

const schema = mongoose.Schema;
// const ObjectId = schema.ObjectId;
// const ObjectId = schema.Types.ObjectId;

const Deckschema = new schema({
    title: String,

});
const DeckModel = mongoose.model('Deck', Deckschema);
export default DeckModel;