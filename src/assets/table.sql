
create table if not exists `student`
(
    `id`       integer          not null primary key AUTOINCREMENT,
    `name`     varchar(256)     not null,
    `age`      int              null,
    `class`    bigint           not null,
    `score`    double default 0 null,
    `exam` int    default 0 null
);


values ('张三', 19, 3, 120, 2);
insert into `student` (`name`, `age`, `class`, `score`, `exam`)
values ('李四', 56, 3, 500, 4);
insert into `student` (`name`, `age`, `class`, `score`, `exam`)
values ('王五', 24, 4, 390, 3);
insert into `student` (`name`, `age`, `class`, `score`, `exam`)
values ('no-chili', 23, 4, 0, 4);
insert into `student` (`name`, `age`, `class`, `score`, `exam`)
values ('Tokio', 80, 4, 600, 4);
insert into `student` (`name`, `age`, `class`, `score`, `exam`)
values ('Alen', 60, 5, 100.5, 1);
