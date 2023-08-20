

class SuccessResult {
  static make(res) {
    this.res = res;
    return this;
  }

  static send(data, total) {
    if (Array.isArray(data)) {
      return this.res.status(200).send(
          {
            data: {
              results: data,
              total: total,
            },
          },
      );
    } else {
      return this.res.status(200).send(
          {
            data: data,
          },
      );
    }
  }

  static sendMessageData(data, message, other) {
    return this.res.status(200).send(
        {
          message: message,
          data: data,
          ...other,
        },
    );
  }
}

module.exports = SuccessResult;
