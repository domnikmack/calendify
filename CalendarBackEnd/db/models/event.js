const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('event', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  year: {
    type: Sequelize.VIRTUAL,
    get() {
      return parseInt(this.getDataValue('date').slice(0, 4), 10);
    }
  },
  month: {
    type: Sequelize.VIRTUAL,
    get() {
      return parseInt(this.getDataValue('date').slice(5, 7));
    }
  },
  day: {
    type: Sequelize.VIRTUAL,
    get() {
      return parseInt(this.getDataValue('date').slice(-2));
    }
  },
  startTime24: {
    type: Sequelize.TIME,
    allowNull: false
  },
  startTime: {
    type: Sequelize.VIRTUAL,
    get() {
      return convert24To12H(this.getDataValue('startTime24'));
    }
  },
  endTime24: {
    type: Sequelize.TIME,
    allowNull: false
  },
  endTime: {
    type: Sequelize.VIRTUAL,
    get() {
      return convert24To12H(this.getDataValue('endTime24'));
    }
  },
  description: {
    type: Sequelize.STRING
  }
});

function convert24To12H(str) {
  let time24Hour = parseInt(str.slice(0, 2), 10);
      let timeMinutes = str.slice(-2);
      let time12Hour = time24Hour % 12;
      let amOrPm = time24Hour < 12 ? 'am' : 'pm';
      if (!time12Hour) time12Hour = 12;
      let full12HourTime = '' + time12Hour + ':' + timeMinutes + amOrPm;
      return full12HourTime;
}
