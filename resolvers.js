
export const resolvers = {
  
    Query: {
      Pets: async (root, args, { Pet }) => {
        const pets = await Pet.find();
        return pets;
      }
    },
    Mutation: {
      addPet: async (
        root,
        { name, type},
        { Pet }
      ) => {
        const newPet = await new Pet({
          name,
          type
        }).save();
        return newPet;
      },
      deletePet: async (root, { _id }, { Pet }) => {
        const petToDelete = await Pet.findOneAndDelete({ _id });
        return petToDelete;
      },
      updatePet: async (
        root,
        { _id, name, type },
        { Pet }
      ) => {
        const updatedPet = await Pet.findOneAndUpdate(
          { _id },
          { $set: { name, type } },
          { new: true }
        );
        return updatedPet;
      }
    }
  };
  