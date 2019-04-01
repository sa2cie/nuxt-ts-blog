// PLUGINS
import { createClient } from '@/plugins/contentful.js'
const client = createClient()

/**
* コンテンツタイプを指定して記事の一覧データを取得する
* @param {string} type - コンテンツタイプ
* @param {object} params - リクエストするときのパラメータ
* @param {number} params.limit - 一度に取得できる記事の最大数
* @param {number} params.skip - 次のlimit分のリソースを取得
* @param {object} params.order - 記事の並び順
* @param {function} then - 記事データが取得出来た時に実行される処理
* @param {function} error - エラー時に実行される処理
*/
export const getPostEntries = (type : string, params, then = (entries) => console.log(entries), error = () => console.error()): Promise<void> => {
  return client
    .getEntries({
      content_type: type ? type : '',
      limit: params.limit ? params.limit : 100,
      skip: params.skip ? params.skip : 0,
      order: params.order ? params.order : null,
    })
    .then(entries => {
      return then(entries);
    })
    .catch(error)
}

/**
* IDを指定して単一記事データを取得する
* @param {string} entry_id - 記事のID
* @param {function} then - 記事データが取得出来た時に実行される処理
* @param {function} error - エラー時に実行される処理
*/
export const getPostEntry = (entry_id : number, then = (entry) => console.log(entry), error = () => console.error()): Promise<void> => {
  return client
    .getEntry(entry_id)
    .then(entry => {
      return then(entry);
    })
    .catch(error)
}
