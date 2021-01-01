import { afterEach, it } from 'mocha';
import { createSandbox } from 'sinon';
import { expect } from 'chai';
import { jsend } from '../../src/jsend';

export default (): void => {
  const sandbox = createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should attach jsend helpers', async () => {
    const jsendMw = jsend();

    const req = sandbox.spy();
    const send = sandbox.spy();
    const res = {
      status: () => ({ send }),
      jsend: {} as any,
    };
    const next = sandbox.spy();

    jsendMw(req as any, res as any, next as any);

    expect(res.jsend.success).to.exist;
    expect(res.jsend.fail).to.exist;
    expect(res.jsend.error).to.exist;
    expect(next.calledOnce).to.be.equal(true);
  });

  it('should respond success', async () => {
    const jsendMw = jsend();

    const req = sandbox.spy();
    const send = sandbox.spy();
    const res = {
      status: () => ({ send }),
      jsend: {} as any,
    };
    const next = sandbox.spy();

    jsendMw(req as any, res as any, next as any);

    res.jsend.success({});

    expect(
      send.calledWith({
        status: 'success',
        data: {},
      }),
    ).to.deep.equal(true);
  });

  it('should respond fail', async () => {
    const jsendMw = jsend();

    const req = sandbox.spy();
    const send = sandbox.spy();
    const res = {
      status: () => ({ send }),
      jsend: {} as any,
    };
    const next = sandbox.spy();

    jsendMw(req as any, res as any, next as any);

    res.jsend.fail({});
    expect(
      send.calledWith({
        status: 'fail',
        data: {},
      }),
    ).to.deep.equal(true);
  });

  it('should respond error', async () => {
    const jsendMw = jsend();

    const req = sandbox.spy();
    const send = sandbox.spy();
    const res = {
      status: () => ({ send }),
      jsend: {} as any,
    };
    const next = sandbox.spy();

    jsendMw(req as any, res as any, next as any);

    res.jsend.error('');

    expect(
      send.calledWith({
        status: 'error',
        message: '',
        code: undefined,
        data: undefined,
      }),
    ).to.deep.equal(true);
  });
};
