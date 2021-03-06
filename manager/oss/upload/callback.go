package upload

import (
  "MuShare/datatype"
  "MuShare/datatype/request/oss"
  "MuShare/db/models"
  "MuShare/utils"
  "gopkg.in/redis.v3"
  "MuShare/conf"
  "strconv"
  "fmt"
)

func (this *OSSOperation) UploadAudioCallback(body *oss.OSSAudioCallback,
redis *redis.Client, config *conf.Conf) datatype.Response {
  tx := this.DB.Begin()
  audio := models.Audio{}
  if body.Object == "" || body.AudioID == "" {
    return badRequest("")
  }

  tx.Where("id = ?", body.AudioID).First(&audio)
  if audio.ID == 0 {
    return badRequest("")
  }

  fmt.Println(body.MimeType)
  if body.MimeType != "audio/wav" &&
     body.MimeType != "audio/mpeg3" &&
     body.MimeType != "audio/aac" {
    return forbidden("File type should only be mp3, wav or aac")
  }


  if body.MimeType == "" {
    audio.ImageUrl = body.Object
  }else if body.MimeType == "" {
    audio.AudioUrl = body.Object
  }else {
    return badRequest("")
  }
  tx.Save(&audio)
  tx.Commit()
  return ok("", audio)
}

func (this *OSSOperation) UploadAvatarCallback(body *oss.OSSAvatarCallback,
redis *redis.Client, config *conf.Conf) datatype.Response {
  auth, userId := utils.TokenAuth(body.Token, redis, config)
  intValue, err1 := strconv.Atoi(userId)
  if auth && err1 == nil {
    body.UserID = intValue
  } else {
    return forbidden("Token Auth Failed")
  }
  fmt.Println(body.MimeType)
  if body.MimeType != "image/png" && body.MimeType != "image/jpeg" {
    return forbidden("File type should only be png or jpeg")
  }
  tx := this.DB.Begin()
  user := models.User{}
  user.ID = body.UserID
  err2 := tx.Model(&user).Update("avatar", body.Object).Error

  if err2 != nil {
    panic(err2.Error())
  }

  tx.Commit()
  return ok("", nil)
}
