---
marp: false
---

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB設計

## users テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|string|null: false, unique: true|
|email_address|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association

- has_many :comments
- has_many :groups, through: :users_groups
- has_many :users_groups

## messages テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|comment|string||
|photo|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

## groups テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|string|null: false, unique: true|

### Association

- has_many :users, through: :users_groups
- has_many :users_groups
- has_many :messages

## users_groups テーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|user_id|integer|foreign_key: tur|
|group_id|integer|foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

### 非同期通信を使ったメッセージ送信機能の実装
