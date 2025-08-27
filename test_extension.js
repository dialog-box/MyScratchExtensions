class MyFirstExtension {
  getInfo() {
    return {
      id: 'myExtension', // internal ID
      name: 'My Extension', // how it shows up in the blocks menu
      blocks: [
        {
          opcode: 'sayHello',
          blockType: Scratch.BlockType.COMMAND,
          text: 'say hello',
        },
        {
          opcode: 'addNumbers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'add [NUM1] + [NUM2]',
          arguments: {
            NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
          }
        }
      ]
    };
  }

  // Implementation of the blocks
  sayHello() {
    alert('Hello from my extension!');
  }

  addNumbers(args) {
    return args.NUM1 + args.NUM2;
  }
}

// Register with Scratch/TurboWarp
Scratch.extensions.register(new MyFirstExtension());
