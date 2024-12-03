PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `_migrations` (file VARCHAR(255) PRIMARY KEY NOT NULL, applied INTEGER NOT NULL);
INSERT INTO _migrations VALUES('1640988000_init.go',1733219580139602);
INSERT INTO _migrations VALUES('1673167670_multi_match_migrate.go',1733219580140036);
INSERT INTO _migrations VALUES('1677152688_rename_authentik_to_oidc.go',1733219580140175);
INSERT INTO _migrations VALUES('1679943780_normalize_single_multiple_values.go',1733219580140448);
INSERT INTO _migrations VALUES('1679943781_add_indexes_column.go',1733219580140948);
INSERT INTO _migrations VALUES('1685164450_check_fk.go',1733219580141068);
INSERT INTO _migrations VALUES('1689579878_renormalize_single_multiple_values.go',1733219580141320);
INSERT INTO _migrations VALUES('1690319366_reset_null_values.go',1733219580141607);
INSERT INTO _migrations VALUES('1690454337_transform_relations_to_views.go',1733219580141751);
INSERT INTO _migrations VALUES('1691747913_resave_views.go',1733219580141907);
INSERT INTO _migrations VALUES('1692609521_copy_display_fields.go',1733219580142110);
INSERT INTO _migrations VALUES('1701496825_allow_single_oauth2_provider_in_multiple_auth_collections.go',1733219580142222);
INSERT INTO _migrations VALUES('1702134272_set_default_json_max_size.go',1733219580142406);
INSERT INTO _migrations VALUES('1718706525_add_login_alert_column.go',1733219580143144);
CREATE TABLE `_admins` (
				`id`              TEXT PRIMARY KEY NOT NULL,
				`avatar`          INTEGER DEFAULT 0 NOT NULL,
				`email`           TEXT UNIQUE NOT NULL,
				`tokenKey`        TEXT UNIQUE NOT NULL,
				`passwordHash`    TEXT NOT NULL,
				`lastResetSentAt` TEXT DEFAULT "" NOT NULL,
				`created`         TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
				`updated`         TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL
			);
INSERT INTO _admins VALUES('itgjq3ahvj4gmg8',0,'kevin.ganthy@gmail.com','GPCYKPeeevzSVlex8pwrw3SvrpZ72gJgPHssdyqtKhpq2yHin4','$2a$12$wJ2BMHGI6US6UbSLFsxm4OC3kfEw04By57P657TzoQAlu2nc6j1.S','','2024-12-03 09:54:29.951Z','2024-12-03 09:54:29.951Z');
CREATE TABLE `_collections` (
				`id`         TEXT PRIMARY KEY NOT NULL,
				`system`     BOOLEAN DEFAULT FALSE NOT NULL,
				`type`       TEXT DEFAULT "base" NOT NULL,
				`name`       TEXT UNIQUE NOT NULL,
				`schema`     JSON DEFAULT "[]" NOT NULL,
				`indexes`    JSON DEFAULT "[]" NOT NULL,
				`listRule`   TEXT DEFAULT NULL,
				`viewRule`   TEXT DEFAULT NULL,
				`createRule` TEXT DEFAULT NULL,
				`updateRule` TEXT DEFAULT NULL,
				`deleteRule` TEXT DEFAULT NULL,
				`options`    JSON DEFAULT "{}" NOT NULL,
				`created`    TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
				`updated`    TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL
			);
INSERT INTO _collections VALUES('_pb_users_auth_',0,'auth','users','[{"system":false,"id":"users_name","name":"name","type":"text","required":false,"presentable":false,"unique":false,"options":{"min":null,"max":null,"pattern":""}},{"system":false,"id":"users_avatar","name":"avatar","type":"file","required":false,"presentable":false,"unique":false,"options":{"mimeTypes":["image/jpeg","image/png","image/svg+xml","image/gif","image/webp"],"thumbs":null,"maxSelect":1,"maxSize":5242880,"protected":false}}]','[]','id = @request.auth.id','id = @request.auth.id','','id = @request.auth.id','id = @request.auth.id','{"allowEmailAuth":true,"allowOAuth2Auth":true,"allowUsernameAuth":true,"exceptEmailDomains":null,"manageRule":null,"minPasswordLength":8,"onlyEmailDomains":null,"onlyVerified":false,"requireEmail":false}','2024-12-03 09:53:00.138Z','2024-12-03 09:53:00.139Z');
CREATE TABLE `_params` (
				`id`      TEXT PRIMARY KEY NOT NULL,
				`key`     TEXT UNIQUE NOT NULL,
				`value`   JSON DEFAULT NULL,
				`created` TEXT DEFAULT "" NOT NULL,
				`updated` TEXT DEFAULT "" NOT NULL
			);
INSERT INTO _params VALUES('5s2yim10p9txcrh','settings','{"meta":{"appName":"Acme","appUrl":"http://localhost:8090","hideControls":false,"senderName":"Support","senderAddress":"support@example.com","verificationTemplate":{"body":"\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eThank you for joining us at {APP_NAME}.\u003c/p\u003e\n\u003cp\u003eClick on the button below to verify your email address.\u003c/p\u003e\n\u003cp\u003e\n  \u003ca class=\"btn\" href=\"{ACTION_URL}\" target=\"_blank\" rel=\"noopener\"\u003eVerify\u003c/a\u003e\n\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e","subject":"Verify your {APP_NAME} email","actionUrl":"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}","hidden":false},"resetPasswordTemplate":{"body":"\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eClick on the button below to reset your password.\u003c/p\u003e\n\u003cp\u003e\n  \u003ca class=\"btn\" href=\"{ACTION_URL}\" target=\"_blank\" rel=\"noopener\"\u003eReset password\u003c/a\u003e\n\u003c/p\u003e\n\u003cp\u003e\u003ci\u003eIf you didn''t ask to reset your password, you can ignore this email.\u003c/i\u003e\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e","subject":"Reset your {APP_NAME} password","actionUrl":"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}","hidden":false},"confirmEmailChangeTemplate":{"body":"\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eClick on the button below to confirm your new email address.\u003c/p\u003e\n\u003cp\u003e\n  \u003ca class=\"btn\" href=\"{ACTION_URL}\" target=\"_blank\" rel=\"noopener\"\u003eConfirm new email\u003c/a\u003e\n\u003c/p\u003e\n\u003cp\u003e\u003ci\u003eIf you didn''t ask to change your email address, you can ignore this email.\u003c/i\u003e\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e","subject":"Confirm your {APP_NAME} new email address","actionUrl":"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}","hidden":false}},"logs":{"maxDays":5,"minLevel":0,"logIp":true},"smtp":{"enabled":false,"host":"smtp.example.com","port":587,"username":"","password":"","authMethod":"","tls":false,"localName":""},"s3":{"enabled":false,"bucket":"","region":"","endpoint":"","accessKey":"","secret":"","forcePathStyle":false},"backups":{"cron":"","cronMaxKeep":3,"s3":{"enabled":false,"bucket":"","region":"","endpoint":"","accessKey":"","secret":"","forcePathStyle":false}},"adminAuthToken":{"secret":"5W5RFDTTltXLgueAJASVx1ET16G6MyU3eeS4BEuDWfBxEBSYx1","duration":1209600},"adminPasswordResetToken":{"secret":"DLrWadxPb8i3Bm4Mc7REjUdT2BHbM4EoRKtEtkExLT7wNvDWg6","duration":1800},"adminFileToken":{"secret":"64feAbAt0hWOiTa84gcNt8xWmY6OdomFddf3CTnyaRf0RaRWZ9","duration":120},"recordAuthToken":{"secret":"OIfm6QuvBoVz5SOKEDS7HUuoWOm9nKCtIX4wG0iZyDe09REG4m","duration":1209600},"recordPasswordResetToken":{"secret":"Jhjqk3vUaxB9yITyiKarUYRVkz8FGvu1jCbKhxYkGZuEleJ93N","duration":1800},"recordEmailChangeToken":{"secret":"ijiQGxzlYACYEZB2vtw6DwoTYMm4ktVDapXURVn7v9V2Qq9CVY","duration":1800},"recordVerificationToken":{"secret":"E8mBML3q59ws7x8oS7L8Zb5XrYZnHzSDt4W9GxOCKUL2WfTAvi","duration":604800},"recordFileToken":{"secret":"H5JhI14i5YeYtoD4mpHWGqubF1ObQYR19SwVwrIEc9SvJrha89","duration":120},"emailAuth":{"enabled":false,"exceptDomains":null,"onlyDomains":null,"minPasswordLength":0},"googleAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"facebookAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"githubAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"gitlabAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"discordAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"twitterAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"microsoftAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"spotifyAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"kakaoAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"twitchAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"stravaAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"giteeAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"livechatAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"giteaAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"oidcAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"oidc2Auth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"oidc3Auth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"appleAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"instagramAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"vkAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"yandexAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"patreonAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"mailcowAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"bitbucketAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null},"planningcenterAuth":{"enabled":false,"clientId":"","clientSecret":"","authUrl":"","tokenUrl":"","userApiUrl":"","displayName":"","pkce":null}}','2024-12-03 09:53:00.138Z','2024-12-03 09:53:00.138Z');
CREATE TABLE `_externalAuths` (
				`id`           TEXT PRIMARY KEY NOT NULL,
				`collectionId` TEXT NOT NULL,
				`recordId`     TEXT NOT NULL,
				`provider`     TEXT NOT NULL,
				`providerId`   TEXT NOT NULL,
				`created`      TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
				`updated`      TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL,
				---
				FOREIGN KEY (`collectionId`) REFERENCES `_collections` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
			);
CREATE TABLE `users` (`avatar` TEXT DEFAULT '' NOT NULL, `created` TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL, `email` TEXT DEFAULT '' NOT NULL, `emailVisibility` BOOLEAN DEFAULT FALSE NOT NULL, `id` TEXT PRIMARY KEY DEFAULT ('r'||lower(hex(randomblob(7)))) NOT NULL, `lastLoginAlertSentAt` TEXT DEFAULT '' NOT NULL, `lastResetSentAt` TEXT DEFAULT '' NOT NULL, `lastVerificationSentAt` TEXT DEFAULT '' NOT NULL, `name` TEXT DEFAULT '' NOT NULL, `passwordHash` TEXT NOT NULL, `tokenKey` TEXT NOT NULL, `updated` TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%fZ')) NOT NULL, `username` TEXT NOT NULL, `verified` BOOLEAN DEFAULT FALSE NOT NULL);
CREATE UNIQUE INDEX _externalAuths_record_provider_idx on `_externalAuths` (`collectionId`, `recordId`, `provider`);
CREATE UNIQUE INDEX _externalAuths_collection_provider_idx on `_externalAuths` (`collectionId`, `provider`, `providerId`);
CREATE UNIQUE INDEX __pb_users_auth__username_idx ON `users` (`username`);
CREATE UNIQUE INDEX __pb_users_auth__email_idx ON `users` (`email`) WHERE `email` != '';
CREATE UNIQUE INDEX __pb_users_auth__tokenKey_idx ON `users` (`tokenKey`);
COMMIT;
