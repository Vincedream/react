/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {LazyComponent, Thenable} from 'shared/ReactLazyComponent';

import {REACT_LAZY_TYPE} from 'shared/ReactSymbols';

export function lazy<T, R>(ctor: () => Thenable<T, R>): LazyComponent<T> {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor, // 这是异步加载组件的函数（返回promise）
    // React uses these fields to store the result.
    _status: -1, // 当上面的 promise 发生变化后，status 会发生改变
    _result: null, // 当 promise resolve 后，返回的结果
  };
}
