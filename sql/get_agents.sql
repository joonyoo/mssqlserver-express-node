


SELECT [fullname]
      ,[pruagentid]
      ,[netsuiteagentid]
      ,[vpagentid]
      ,[hbr_id]
      ,[photo]
      ,[photo_lg]
      ,[isactive]
      ,[isagent]
      ,[phone]
      ,[email]
      ,[coach]
      ,[firstname]
      ,[lastname]
      ,[current_status]
      ,farm_count
  FROM [dbo].[agents]
  where farm_count > 0
  order by lastname, firstname