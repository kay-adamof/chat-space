# ユーザー管理

***

# サインイン サインアウト

- ログアウトリンク設定
- パスのプレフィックス
- method: :delete

```haml
      = link_to "ログアウト", destroy_user_session_path, method: :delete, class: 'btn'

```

# メッセージ送信機能の実装
