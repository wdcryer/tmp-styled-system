class RosettaColor extends String {
  constructor(...args) {
    super(args);

    this['100'] = 'orange';
    this['200'] = 'yellow';
  }

  valueOf() {
    return 'red';
  }
}

export default RosettaColor;
