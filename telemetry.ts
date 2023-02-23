/**
 * Telemetry sender mock
 */

const telemetry = {
  sendEvents: <T>(events: T[]) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`sending ${events.length} telemetry events`);
        return resolve({
          payload: {
            ok: true
          }
        });
      }, 50);
    });
  }
};

export default telemetry;
